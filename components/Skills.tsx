/*
 * Skills.tsx
 *
 * Displays grouped skills in a responsive grid. Each category has a heading
 * and a list of skills rendered as pill tags.
 */

import type { SkillGroup } from '../data/profile';

interface SkillsProps {
  skills: SkillGroup[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
      {skills.map((group) => (
        <div key={group.category} className="panel-bg p-4 rounded-2xl">
          <h4 className="text-primary font-semibold mb-2">{group.category}</h4>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}