import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';
import 'react-tooltip/dist/react-tooltip.css';
import 'react-toastify/dist/ReactToastify.css';
import './globals.scss';


export const metadata: Metadata = {
  title: 'Miguel Lopez',
  description: '💻Senior Software Engineer ⚛️ Front-End / FullStack',
};

const popins_init = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${popins_init.variable}`}>
    {children}
    <SpeedInsights/>
    <Analytics/>
    <ToastContainer position="bottom-left" hideProgressBar={true} autoClose={2000}/>
    </body>
    </html>
  );
}
