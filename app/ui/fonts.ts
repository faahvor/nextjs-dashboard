import { Bellefair, Inter,Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });
export const bellefair = Bellefair({
    subsets: ['latin', 'hebrew'],
    weight: '400'
});