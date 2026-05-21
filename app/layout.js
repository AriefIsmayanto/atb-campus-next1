import './globals.css';

export const metadata = {
  title: 'ATB Baiturrahman | Kampus Digital Berbasis Nilai Islami',
  description:
    'Website demo Akademi Teknologi dan Bisnis Baiturrahman: program Bisnis Digital, PMB, galeri, keunggulan, dan konsultasi pendaftaran.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
