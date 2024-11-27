import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal | PT. Burgeon Adaire International",
  description: "Burgeon Adaire Portal.",
  authors: [
    {
      name: "PT. Burgeon Adaire International",
      url: "https://burgeonadaire.com"
    }
  ],
  openGraph: {
    title: "Portal | PT. Burgeon Adaire International",
    description: "Burgeon Adaire Portal.",
    locale: "en_US",
    alternateLocale: "id_ID",
    type: "website",
    url: "https://portal.burgeonadaire.com",
    siteName: "Burgeon Adaire Portal",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>

      <Script id="gtg-script1" async src="https://www.googletagmanager.com/gtag/js?id=G-PNCNN1T0HM"></Script>
      <Script id="gtg-script2">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PNCNN1T0HM');
        `}
      </Script>
    </html>
  );
}
