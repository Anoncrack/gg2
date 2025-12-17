import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/layout/CookieConsent';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
});


export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export const metadata: Metadata = {

  metadataBase: new URL('https://sendinglight.net'),

  title: {
    default: 'SendingLight RP | Norges Beste GTA 5 Rollespill',
    template: '%s | SendingLight RP',
  },

  description: 'Bli med i Norges mest innovative FiveM-server. Unikt inventar, dynamisk økonomi, gjenger, politi og hundrevis av egendefinerte biler. Start din historie i Los Santos i dag.',

  keywords: [
    'GTA 5 RP', 'FiveM Norge', 'Norsk Rollespill', 'SendingLight',
    'GTA V Server', 'Roleplay Norway', 'Norsk Gaming', 'GTA RP Server'
  ],

  authors: [{ name: 'SendingLight Team' }],
  creator: 'SendingLight Network',
  publisher: 'SendingLight Network',


  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },


  openGraph: {
    type: 'website',
    locale: 'no_NO',
    url: 'https://sendinglight.net',
    siteName: 'SendingLight RP',
    title: 'SendingLight RP | Norges Ledende SendingLight Server',
    description: 'Opplev ekte norsk rollespill med unike scripts, egendefinerte biler og et aktivt samfunn. Koble til nå!',
    images: [
      {


        url: '/images/bgh.webp',
        width: 1200,
        height: 630,
        alt: 'SendingLight RP Banner',
      },
    ],
  },


  twitter: {
    card: 'summary_large_image',
    title: 'SendingLight RP',
    description: 'Norges beste GTA 5 Rollespill opplevelse.',
    images: ['/images/bgh.webp'],
  },


  icons: {
    icon: '/images/logo.webp',
    shortcut: '/images/logo.webp',
    apple: '/images/logo.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={`${montserrat.variable} scroll-smooth`}>
      <body className="font-sans bg-[#050505] text-white selection:bg-[#E91E63] selection:text-white">

        <Header />

        {children}

        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}