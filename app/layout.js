
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Import the Footer component
import GridOverlay from '../components/GridOverlay'; 
import '../src/app/globals.css';
// import { ProjectsProvider } from '../contexts/ProjectsContext';

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
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}
