'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

const FooterWrapper = () => {
  const pathname = usePathname();

  return (
    <footer className="  h-auto">
      {pathname !== '/contact' && (
        <div className="footer-top w-full h-full flex flex-col md:flex-row  border-stone-400">
          <Footer.Top />
        </div>
      )}
      <div className="footer-bottom flex flex-col p-p-gap md:flex-row justify-between items-center pb-6">
        <Footer.Bottom />
      </div>
    </footer>
  );
};

export default FooterWrapper;