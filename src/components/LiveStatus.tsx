'use client';

import { useEffect, useState } from 'react';
import { Activity, GitCommit } from 'lucide-react';

interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
}

export default function LiveStatus({ username: propUsername }: { username?: string }) {
  const [lastActivity, setLastActivity] = useState<string | null>(null);
  const [repoName, setRepoName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubActivity() {
      const username = propUsername || process.env.NEXT_PUBLIC_GITHUB_USERNAME;
      if (!username) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`https://api.github.com/users/${username}/events/public?per_page=1`);
        if (!res.ok) throw new Error('Failed to fetch');
        const events: GitHubEvent[] = await res.json();

        if (events.length > 0) {
          const event = events[0];
          const time = new Date(event.created_at);
          const now = new Date();
          const diffMs = now.getTime() - time.getTime();
          const diffMins = Math.floor(diffMs / 60000);
          const diffHours = Math.floor(diffMins / 60);
          const diffDays = Math.floor(diffHours / 24);

          let timeAgo: string;
          if (diffMins < 1) timeAgo = 'just now';
          else if (diffMins < 60) timeAgo = `${diffMins}m ago`;
          else if (diffHours < 24) timeAgo = `${diffHours}h ago`;
          else timeAgo = `${diffDays}d ago`;

          setLastActivity(timeAgo);
          setRepoName(event.repo.name.split('/').pop() || event.repo.name);
        }
      } catch {
        // Silently fail
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubActivity();
    // Refresh every 5 minutes
    const interval = setInterval(fetchGitHubActivity, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [propUsername]);

  if (loading) {
    return (
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
      >
        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--text-muted)' }} />
        <span style={{ color: 'var(--text-muted)' }}>Loading status...</span>
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
    >
      {/* Pulsing dot */}
      <span className="relative flex h-2.5 w-2.5">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75 pulse-dot"
          style={{ background: '#22c55e' }}
        />
        <span
          className="relative inline-flex rounded-full h-2.5 w-2.5"
          style={{ background: '#22c55e' }}
        />
      </span>

      {lastActivity ? (
        <div className="flex items-center gap-2">
          <span style={{ color: 'var(--text-secondary)' }} className="flex items-center gap-1">
            <GitCommit size={14} style={{ color: 'var(--accent)' }} />
            Active {lastActivity}
          </span>
          {repoName && (
            <>
              <span style={{ color: 'var(--text-muted)' }}>·</span>
              <span style={{ color: 'var(--accent-light)' }} className="flex items-center gap-1">
                <Activity size={13} />
                {repoName}
              </span>
            </>
          )}
        </div>
      ) : (
        <span style={{ color: 'var(--text-secondary)' }}>Available for work</span>
      )}
    </div>
  );
}
