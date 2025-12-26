/*
 * Contact.tsx
 *
 * Displays contact information and provides links to download the CV and visit
 * social profiles. The download button uses the CV.pdf in the public folder.
 */

import type { ContactInfo } from '../data/profile';

interface ContactProps {
  contact: ContactInfo;
}

export default function Contact({ contact }: ContactProps) {
  return (
    <div className="space-y-4 pb-4">
      <div className="panel-bg p-4 rounded-2xl">
        <h4 className="text-primary font-semibold mb-1">Контакты</h4>
        <ul className="space-y-2 text-sm text-white/80">
          <li>
            Телефон: <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a>
          </li>
          <li>
            Email: <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
          </li>
          <li>Местоположение: {contact.location}</li>
          {contact.github && (
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary"
              >
                GitHub
              </a>
            </li>
          )}
          {contact.linkedin && (
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary"
              >
                LinkedIn
              </a>
            </li>
          )}
          {contact.telegram && (
            <li>
              <a
                href={contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary"
              >
                Telegram
              </a>
            </li>
          )}
        </ul>
      </div>
      {/* CV download */}
      <div className="panel-bg p-4 rounded-2xl">
        <a
          href="/CV.pdf"
          download
          className="inline-block rounded-pill bg-primary px-5 py-2 text-sm font-medium text-background hover:bg-primary-dark transition-colors duration-200 shadow-glow"
        >
          Скачать CV
        </a>
      </div>
    </div>
  );
}