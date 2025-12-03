
import React, { useState } from 'react';
import { navLinks } from '../constants';

const Logo: React.FC = () => (
    <img src="https://i.ibb.co/4RJRrttb/Sheltershub-Logo-png.png" alt="Sheltershub Logo" className="h-[4.5rem] w-auto" />
);

interface HeaderProps {
    onNavigate?: (page: string) => void;
    activePage?: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activePage = 'home' }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent, linkName: string) => {
        e.preventDefault();
        if (onNavigate) {
            if (linkName === 'Home') onNavigate('home');
            else if (linkName === 'All Properties') onNavigate('all-properties');
            // Other links can remain default for now
        }
    };

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-[#082956] text-white text-sm font-light">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span>The Most Trusted Real Estate Marketplace</span>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-brand-orange transition-colors">Post a Property</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Login</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Signup</a>
          </div>
        </div>
      </div>
      
      {/* Middle Bar: Logo and Advert */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex bg-gray-300 items-center justify-center w-full max-w-md lg:max-w-2xl h-20 mx-4 rounded-lg">
            <span className="text-gray-600 font-semibold text-lg text-center">Advert Space by Google</span>
        </div>
        <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 focus:outline-none" aria-label="Open menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
      </div>

      {/* Bottom Bar: Main Navigation */}
      <div className="border-t border-b border-gray-200 hidden lg:block">
        <div className="container mx-auto px-4 h-14 flex justify-center items-center">
             <nav className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.name)}
                    className={`${(link.name === 'Home' && activePage === 'home') || (link.name === 'All Properties' && activePage === 'all-properties') ? 'text-brand-orange' : 'text-gray-800'} hover:text-brand-orange font-semibold text-base transition-colors`}
                >
                    {link.name}
                </a>
                ))}
            </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
            <nav className="flex flex-col items-center py-4 space-y-2">
                {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => {
                        handleNavClick(e, link.name);
                        setMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-brand-orange font-medium px-4 py-2 w-full text-center"
                >
                    {link.name}
                </a>
                ))}
            </nav>
            <div className="flex flex-col items-center space-y-2 border-t pt-4 pb-4">
                <a href="#" className="text-gray-700 hover:text-brand-orange">Post a Property</a>
                <a href="#" className="text-gray-700 hover:text-brand-orange">Login</a>
                <a href="#" className="text-gray-700 hover:text-brand-orange">Signup</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
