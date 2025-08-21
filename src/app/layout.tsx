import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: 'My App',
  description: 'A simple Next.js App Router demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ display: 'flex', gap: '1rem' }}>
          <Link style={{ color: 'black' }} href='/'>Home</Link>
          <Link style={{ color: 'black' }} href='/about'>About</Link>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}