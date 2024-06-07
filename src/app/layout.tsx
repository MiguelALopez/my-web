import type { Metadata } from "next";
import {Inter, Poppins} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miguel Lopez",
  description: "💻Senior Software Engineer ⚛️ Front-End / FullStack",
};

const popins_init = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${popins_init.variable}`}>{children}</body>
    </html>
  );
}
