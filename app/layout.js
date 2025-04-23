import Navbar from '../components/Navbar';
import FooterWrapper from '../components/FooterWrapper';
import GridOverlay from '../components/GridOverlay'; 
import '../src/app/globals.css';
import { Analytics } from "@vercel/analytics/react"

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* 添加结构化数据 */}
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
      </head>
      <body>
        <Navbar />
        <main>
        {/* <ProjectsProvider value={null}> */}
          {children}
        {/* </ProjectsProvider> */}
        </main>
        <FooterWrapper />
        <Analytics /> {/* Add the Analytics component here */}
      </body>
    </html>
  );
}
