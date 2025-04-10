// app/layout.js
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Railway Reservation System',
  description: 'Search and book trains easily',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
