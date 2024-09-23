import '@/app/ui/global.css';
import { bellefair } from './ui/fonts';

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bellefair.className}`}>{children}</body>
    </html>
  );
}
