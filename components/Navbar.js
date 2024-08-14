// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Landing</Link></li>
        <li><Link href="/resume">Resume</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
