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
        <header style={{ padding: '1rem', background: '#f3f3f3' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
          </nav>
        </header>

        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  );
}