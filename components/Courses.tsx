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

  return (
    <div className="space-y-4 pb-4">
      <div className="panel-bg p-4 rounded-2xl">
        <h4 className="text-primary font-semibold mb-2">
          Доп курсы
        </h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-white/80">
          {courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
