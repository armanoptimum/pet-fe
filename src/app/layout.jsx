import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Monito',
  description: 'Pet service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
