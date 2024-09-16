import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Liens - café de especialidad',
  description: 'Un punto en el espacio donde ser vos mismo.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo-white.png',
        href: '/logo-white.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-black.png',
        href: '/logo-black.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
}
