"use client";

/*
 * Experience.tsx
 *
 * Renders a vertical timeline of work experience entries. Each item can be
 * expanded to show details and achievements. The timeline uses a simple
 * vertical line on the left for visual separation.
 */

import { useState } from 'react';
import type { Experience as ExperienceType } from '../data/profile';

interface ExperienceProps {
  experience: ExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="space-y-4 pb-4">
      {experience.map((exp, index) => (
        <ExperienceItem key={exp.id} exp={exp} isLast={index === experience.length - 1} />
      ))}
    </div>
  );
}

interface ExperienceItemProps {
  exp: ExperienceType;
  isLast: boolean;
}

function ExperienceItem({ exp, isLast }: ExperienceItemProps) {
  const [open, setOpen] = useState(() => exp.id === 'ibs');
  return (
    <div className="relative pl-6">
      {/* Vertical timeline marker */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-white/20" style={{ height: isLast ? '12px' : '100%' }} />
      {/* Dot */}
      <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary" />
      <div className="panel-bg p-4 rounded-2xl">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-white leading-snug">
              {exp.company}
            </h3>
            <p className="text-sm text-white/70">
              {exp.role} · {exp.period}
            </p>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="text-primary text-sm hover:underline focus:outline-none"
          >
            {open ? 'Свернуть' : 'Подробнее'}
          </button>
        </div>
        {open && (
          <div className="mt-2 space-y-2 text-sm text-white/80">
            <ul className="list-disc list-inside space-y-1">
              {exp.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            {exp.achievements && exp.achievements.length > 0 && (
              <div>
                <p className="font-medium text-primary mb-1">Достижения:</p>
                <ul className="list-disc list-inside space-y-1">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
