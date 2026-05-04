import {
  Code, Database, Server, Cloud, Terminal, GitBranch,
  Globe, Layout, Cpu, Box, Layers, Workflow,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  database: Database,
  server: Server,
  cloud: Cloud,
  terminal: Terminal,
  'git-branch': GitBranch,
  globe: Globe,
  layout: Layout,
  cpu: Cpu,
  box: Box,
  layers: Layers,
  workflow: Workflow,
};

interface SkillBadgeProps {
  skillName: string;
  icon?: string;
}

export default function SkillBadge({ skillName, icon }: SkillBadgeProps) {
  const IconComponent = icon && iconMap[icon] ? iconMap[icon] : Code;

  return (
    <div
      className="inbio-button group !flex !items-center !gap-3 !px-5 !py-3 !rounded-lg cursor-default"
      title={skillName}
    >
      <IconComponent 
        size={18} 
        className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" 
      />
      <span className="text-sm font-semibold tracking-wide text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
        {skillName}
      </span>
    </div>
  );
}
