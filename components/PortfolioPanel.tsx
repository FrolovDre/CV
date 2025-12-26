"use client";

/*
 * PortfolioPanel.tsx
 *
 * This component renders the right‑hand panel of the portfolio site. It manages
 * a tabbed interface to display different sections (projects, experience,
 * skills, education, contacts) based on the user’s selection. The panel is
 * scrollable and adapts gracefully on smaller screens.
 */

import { useState } from 'react';
import { Profile } from '../data/profile';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Courses from './Courses';

interface PortfolioPanelProps {
  profile: Profile;
}

// Define the names and keys of tabs for easier mapping
const tabs = [
  { key: 'experience', label: 'Опыт' },
  { key: 'projects', label: 'Пет-проекты' },
  { key: 'skills', label: 'Навыки' },
  { key: 'education', label: 'Образование' },
  { key: 'courses', label: 'Доп курсы' }
] as const;

export default function PortfolioPanel({ profile }: PortfolioPanelProps) {
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('experience');

  return (
    <div className="panel-bg card-shadow w-full h-full flex flex-col rounded-3xl p-4 md:p-6">
      {/* Tab navigation */}
      <nav className="flex gap-2 md:gap-3 flex-wrap">
        {tabs.map((tab) => {
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={
                'tab-button ' +
                (isActive ? 'tab-button-active' : 'tab-button-inactive')
              }
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
      {/* Content */}
      <div className="mt-4 flex-1 overflow-y-auto pr-2">
        {active === 'projects' && <Projects projects={profile.projects} />}
        {active === 'experience' && <Experience experience={profile.experience} />}
        {active === 'skills' && <Skills skills={profile.skills} />}
        {active === 'education' && (
          <Education
            education={profile.education}
            certificates={profile.certificates}
            languages={profile.languages}
          />
        )}
        {active === 'courses' && <Courses courses={profile.courses} />}
      </div>
    </div>
  );
}
