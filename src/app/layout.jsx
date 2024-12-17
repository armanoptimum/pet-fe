import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import StyledComponentsRegistry from './lib/registry';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
