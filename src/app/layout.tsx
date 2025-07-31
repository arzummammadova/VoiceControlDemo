import './globals.css';
import Script from 'next/script';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script 
        src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.1/annyang.min.js" 
        strategy="lazyOnload" 
      />
    </html>
  );
}