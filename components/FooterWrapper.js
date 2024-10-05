'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

const FooterWrapper = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-stone-900 text-white py-20 h-auto">
      {pathname !== '/contact' && (
        <div className="footer-top w-full h-full flex flex-col md:flex-row items-center mb-2 md:mb-12 py-20 border-b-[1px] border-stone-400">
          <Footer.Top />
        </div>
      )}
      <div className="footer-bottom flex flex-col p-p-gap md:flex-row justify-between items-center pt-6">
        <Footer.Bottom />
      </div>
    </footer>
  );
};

export default FooterWrapper;