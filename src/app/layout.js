import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WoSo Fantasy",
  description: "Drafting the future of women's soccer",
  icons: {
    icon: "/favicon.ico", // Ensure favicon is properly referenced
  },
  openGraph: {
    title: "WoSo Fantasy",
    description: "Drafting the future of women's soccer",
    url: "https://wosofantasy.com",
    siteName: "WoSo Fantasy",
    images: [
      {
        url: "/WoSoLogo.png", // Make sure this image exists in /public
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
