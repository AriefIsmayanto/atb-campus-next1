import './globals.css';

export const metadata = {
  title: 'ATB Baiturrahman | Kampus Digital Berbasis Nilai Islami',
  description:
    'Website demo Akademi Teknologi dan Bisnis Baiturrahman untuk promosi PMB, profil kampus, program studi, galeri, dan kontak.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
