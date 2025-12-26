import type { ReactNode } from 'react';
import './globals.css';
import FluidBackground from '../components/FluidBackground';
import CursorFireTrail from '../components/CursorFireTrail';

export const metadata = {
  title: 'Андрей Фролов – Portfolio',
  description:
    'Портфолио Андрея Фролова — проекты, опыт, навыки и образование молодого продуктового менеджера.',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="relative">
        {/* Animated fluid background behind everything */}
        <FluidBackground />
        {/* Fire trail cursor effect */}
        <CursorFireTrail />
        {children}
      </body>
    </html>
  );
}