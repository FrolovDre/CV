/*
 * Courses.tsx
 *
 * Displays additional courses list.
 */

interface CoursesProps {
  courses: string[];
}

export default function Courses({ courses }: CoursesProps) {
  if (courses.length === 0) {
    return null;
  }

  const groupedCourses = courses.reduce<Record<string, string[]>>((acc, course) => {
    const match = course.match(/^(\d{4})\s+(.*)$/);
    const year = match?.[1] ?? 'Без года';
    const title = match?.[2] ?? course;

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(title);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedCourses).sort((a, b) => b.localeCompare(a));

  return (
    <div className="space-y-4 pb-4">
      <div className="panel-bg p-4 rounded-2xl space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-primary font-semibold">
            Доп курсы
          </h4>
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">Обучение</span>
        </div>
        <div className="space-y-3">
          {sortedYears.map((year) => (
            <div key={year} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-widest text-white/50">Год</span>
                <span className="text-sm font-semibold text-primary">{year}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-white/80">
                {groupedCourses[year].map((course) => (
                  <li key={`${year}-${course}`}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
