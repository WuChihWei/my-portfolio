
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Import the Footer component
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
        {/* <GridOverlay />  */}
        <Navbar />
        <main>
          {children}
        </main>
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}
