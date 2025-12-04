
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface SitemapPageProps {
  onNavigate: (page: string) => void;
}

const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pages = [
    { title: 'Main', links: [
        { name: 'Home', page: 'home' },
        { name: 'Login / Register', page: 'login' },
        { name: 'Search Results', page: 'search-results' },
        { name: 'Contact', page: 'home' }, // Assuming contact is on home or separate
    ]},
    { title: 'Properties', links: [
        { name: 'All Properties', page: 'all-properties' },
        { name: 'Single Property Detail (Demo)', page: 'property-detail' },
        { name: 'Post a Property', page: 'add-property' },
    ]},
    { title: 'Agencies', links: [
        { name: 'Agencies List', page: 'agencies' },
        { name: 'Single Agency Detail (Demo)', page: 'agency-detail' },
        { name: 'Register Agency', page: 'add-agency' },
    ]},
    { title: 'Agents', links: [
        { name: 'Register Agent', page: 'add-agent' },
        // Add Agent List link if exists
    ]},
    { title: 'Developers', links: [
        { name: 'Developers List', page: 'developers' },
        { name: 'Single Developer Detail (Demo)', page: 'developer-detail' },
        { name: 'Register Developer', page: 'add-developer' },
    ]},
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header onNavigate={onNavigate} activePage="home" />

      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-[#0A2B4C] mb-2">Sitemap</h1>
            <p className="text-gray-500">Overview of all pages on Sheltershub.</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pages.map((section, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h2 className="text-xl font-bold text-[#0A2B4C] mb-4 border-b pb-2">{section.title}</h2>
                    <ul className="space-y-3">
                        {section.links.map((link, linkIdx) => (
                            <li key={linkIdx}>
                                <button 
                                    onClick={() => onNavigate(link.page)}
                                    className="text-gray-600 hover:text-[#F9A826] hover:underline flex items-center gap-2 transition-colors text-left"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F9A826]"></span>
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default SitemapPage;
