import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Jordan Wu | Product Enthusiast',
  description: 'Welcome to Jordan Wu portfolio website, End-to-End Digital Product Enthusiast.',
  icons: {
    icon: '/jordan_wu_web_logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
