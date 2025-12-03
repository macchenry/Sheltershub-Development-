import React from 'react';
import { footerLinks } from '../constants';

const Footer: React.FC = () => {
  const propertyTypeLinks = footerLinks['Property Type'];
  
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          <div>
            <h3 className="font-bold mb-4">Residential</h3>
            <ul className="space-y-2 text-sm">
              {propertyTypeLinks['Residential'].map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-brand-orange">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Commercial</h3>
            <ul className="space-y-2 text-sm">
              {propertyTypeLinks['Commercial'].map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-brand-orange">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks['About Us'].map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-brand-orange">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks['Support'].map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-brand-orange">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Our Socials</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks['Our Socials'].map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-brand-orange">{link.name}</a></li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      <div className="bg-brand-blue-dark py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          Copyright© 2025 Sheltershub.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
