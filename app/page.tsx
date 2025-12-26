import Image from 'next/image';
import { profile } from '../data/profile';
import PortfolioPanel from '../components/PortfolioPanel';

export default function HomePage() {
  return (
    <main className="relative z-10 flex flex-col md:flex-row min-h-screen items-start justify-start px-6 py-12 md:px-12 md:py-20 gap-8">
      {/* Left column: about section */}
      <section className="relative w-full md:w-2/5 flex flex-col gap-6 max-w-md">
        {/* Profile photo */}
        <div className="relative mx-auto md:mx-0 w-48 h-48 rounded-3xl overflow-hidden shadow-glow">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="192px"
            className="object-cover"
          />
        </div>
        {/* Name and role */}
        <div>
          <h1 className="text-3xl font-semibold leading-tight text-white">
            {profile.name}
          </h1>
          <p className="text-lg text-white/70 mt-1">
            {profile.role}
          </p>
        </div>
        {/* About */}
        <p className="text-base text-white/80 leading-relaxed">
          {profile.about}
        </p>
        {/* What I'm looking for */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-sm text-white/80">
          <p className="mb-1 text-xs uppercase tracking-wide text-primary/70">
            Что ищу
          </p>
          <p>{profile.whatILookFor}</p>
        </div>
        {/* Contact info */}
        <ul className="space-y-3 text-sm text-white/80">
          <li className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-primary/60 rounded-full"></span>
            <a href={`mailto:${profile.contact.email}`} className="hover:underline">
              {profile.contact.email}
            </a>
          </li>
          {profile.contact.github && (
            <li className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-primary/60 rounded-full"></span>
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </li>
          )}
          {profile.contact.telegram && (
            <li className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-primary/60 rounded-full"></span>
              <a href={profile.contact.telegram} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Telegram
              </a>
            </li>
          )}
        </ul>
        {/* Download CV button */}
        <div className="mt-6">
          <a
            href="/CV.pdf"
            download
            className="inline-block rounded-pill bg-primary px-6 py-3 text-sm font-medium text-background hover:bg-primary-dark transition-colors duration-200 shadow-glow"
          >
            Скачать CV
          </a>
        </div>
      </section>
      {/* Right column: portfolio panel */}
      <section className="relative w-full md:w-3/5 flex-1">
        <PortfolioPanel profile={profile} />
      </section>
    </main>
  );
}
