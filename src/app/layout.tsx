import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Yusuf Akcay',
  description: 'Yusuf Akcay web developer portfolio page.',
  icons: '/logo.png',
};

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
