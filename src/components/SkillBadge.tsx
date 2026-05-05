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
  svgIcon?: string;
}

export default function SkillBadge({ skillName, icon, svgIcon }: SkillBadgeProps) {
  const IconComponent = icon && iconMap[icon] ? iconMap[icon] : Code;

  return (
    <div
      className="inbio-button group !flex !items-center !gap-3 !px-5 !py-3 !rounded-lg cursor-default"
      title={skillName}
    >
      {svgIcon ? (
        <div 
          className="w-[18px] h-[18px] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors"
          dangerouslySetInnerHTML={{ __html: svgIcon }}
        />
      ) : (
        <IconComponent 
          size={18} 
          className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" 
        />
      )}
      <span className="text-sm font-semibold tracking-wide text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
        {skillName}
      </span>
    </div>
  );
}
