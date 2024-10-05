import Navbar from '../components/Navbar';
import FooterWrapper from '../components/FooterWrapper';
import GridOverlay from '../components/GridOverlay'; 
import '../src/app/globals.css';

export const metadata = {
  title: 'Jordan Wu',
  description: 'Welcome to Jordan Wu portfolio website',
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
      </body>
    </html>
  );
}
