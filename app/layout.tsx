import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <head>
        <title>Liens - café de especialidad</title>
        <meta
          name='description'
          content='Un punto en el espacio donde ser vos mismo.'
        />
        <link rel='icon' href='/logo.png' />
      </head>
      <body>{children}</body>
    </html>
  );
}
