/*
 * Education.tsx
 *
 * Displays education, certificates and languages sections.
 */

import type { Education as EducationType } from '../data/profile';

interface EducationProps {
  education: EducationType[];
  certificates: string[];
  languages: { name: string; level: string }[];
}

export default function Education({ education, certificates, languages }: EducationProps) {
  return (
    <div className="space-y-4 pb-4">
      {/* Education entries */}
      {education.map((ed, idx) => (
        <div key={idx} className="panel-bg p-4 rounded-2xl">
          <h4 className="text-primary font-semibold mb-1">
            {ed.degree}
          </h4>
          <p className="text-white/80 text-sm">
            {ed.institution}
          </p>
          <p className="text-white/60 text-xs mb-1">
            {ed.period}
          </p>
          {ed.details && (
            <p className="text-white/70 text-sm">{ed.details}</p>
          )}
        </div>
      ))}
      {/* Certificates */}
      {certificates.length > 0 && (
        <div className="panel-bg p-4 rounded-2xl">
          <h4 className="text-primary font-semibold mb-1">
            Certificates
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-white/80">
            {certificates.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Languages */}
      {languages.length > 0 && (
        <div className="panel-bg p-4 rounded-2xl">
          <h4 className="text-primary font-semibold mb-1">
            Languages
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-white/80">
            {languages.map((lang) => (
              <li key={lang.name}>
                {lang.name} — {lang.level}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}