// // app/layout.js
// import Navbar from '../components/Navbar';
// import '../src/app/globals.css';

// export const metadata = {
//   title: 'My Portfolio',
//   description: 'Welcome to my personal portfolio website',
// };

// export default function RootLayout({ children }) {
//   return (
//       <html lang="en">
//         <body>
//           <Navbar />
//               <main>{children}</main>
//         </body>
//       </html>
//   );
// }


import Navbar from '../components/Navbar';
import GridOverlay from '../components/GridOverlay'; // Import the Grid Overlay component
import '../src/app/globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio website',
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
      </body>
    </html>
  );
}
