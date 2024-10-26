import Navbar from '../components/Navbar';
import FooterWrapper from '../components/FooterWrapper';
import GridOverlay from '../components/GridOverlay'; 
import '../src/app/globals.css';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Jordan Wu | Product Enthusiast',
  description: 'Welcome to Jordan Wu portfolio website, End-to-End Digital Product Enthusiast.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
    
  return (
    <html lang="en">
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
