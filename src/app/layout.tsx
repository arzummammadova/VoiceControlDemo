// ./src/app/layout.tsx
import './globals.css';
import Script from 'next/script'; // Script komponentini import edin

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* Strategy-ni 'beforeInteractive' olaraq dəyişdirin */}
      <Script
        src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.1/annyang.min.js"
        strategy="beforeInteractive" // Buranı dəyişin
      />
    </html>
  );
}