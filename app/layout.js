import Navbar from '../components/Navbar';
import FooterWrapper from '../components/FooterWrapper';
import GridOverlay from '../components/GridOverlay'; 
import '../src/app/globals.css';
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: 'Jordan Wu | AI Product Developer | UI/UX Designer | Business Strategist',
  description: 'Jordan Wu is an experienced AI Product Developer specializing in UX design, product development, business strategy, and creating innovative digital experiences.',
  keywords: 'Jordan Wu, AI Product Developer, UX Designer, Product Development, Digital Product, Business Strategy, Portfolio',
  openGraph: {
    title: 'Jordan Wu | AI Product Developer | UX Designer | Business Strategist',
    description: 'Jordan Wu is an experienced AI Product Developer specializing in UI/UX design, product development, business strategy, and creating innovative digital experiences.',
    url: 'https://www.jordan-wu.com',
    siteName: 'Jordan Wu Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jordan Wu - AI Product Developer',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jordan Wu | AI Product Designer | UI/UX Designer | Business Strategist',
    description: 'Jordan Wu is an experienced AI Product Designer specializing in UI/UX design, product development, business strategy, and creating innovative digital experiences.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.jordan-wu.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 原本你的 SEO 設定 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* 原本你的結構化資料 Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jordan Wu",
              "jobTitle": "AI Product Designer & Business Strategist",
              "description": "Experienced AI Product Designer specializing in UI/UX design, business strategy, and digital product development",
              "url": "https://www.jordan-wu.com/",
              "sameAs": [
                "https://www.linkedin.com/in/jordanwu-tech/",
                "https://github.com/WuChihWei",
                "https://www.behance.net/jordanwu-tech"
              ],
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "KTH Royal Institute of Technology",
                  "location": "Stockholm, Sweden"
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Shih Chen University",
                  "location": "Taipei, Taiwan"
                }
              ],
              "knowsAbout": ["AI Product Design", "UI/UX Design", "Digital Product Development", "Interactive Media Technology", "Business Strategy"]
            })
          }}
        />

        {/* 加上 Google Tag Manager (GTM) script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-MNZMBL8T';f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MNZMBL8T');`
          }}
        />
      </head>

      <body>
        {/* 加上 Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MNZMBL8T"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
          </iframe>
        </noscript>

        {/* 正常內容 */}
        <Navbar />
        <main>
          {children}
        </main>
        <FooterWrapper />
        <Analytics />
      </body>
    </html>
  );
}
