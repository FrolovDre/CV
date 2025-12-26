"use client";

/*
 * Projects.tsx
 *
 * Lists all projects in the portfolio. Each project is rendered using
 * ProjectCard, which can be expanded to show detailed information.
 */

import { useState } from 'react';
import type { Project } from '../data/profile';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="space-y-4 pb-4">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="panel-bg p-4 rounded-2xl relative overflow-hidden">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-white leading-snug">
          {project.title}
        </h3>
        {/* Collapse/expand button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-primary text-sm hover:underline focus:outline-none"
        >
          {open ? 'Свернуть' : 'Подробнее'}
        </button>
      </div>
      {/* Summary always visible */}
      <div className="mt-2 text-sm text-white/80 space-y-1">
        <p>
          <span className="font-medium text-primary mr-1">Problem:</span>
          {project.problem}
        </p>
        {open && (
          <>
            <p>
              <span className="font-medium text-primary mr-1">Action:</span>
              {project.action}
            </p>
            <p>
              <span className="font-medium text-primary mr-1">Result:</span>
              {project.result}
            </p>
          </>
        )}
      </div>
      {/* Tools / tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/80"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}