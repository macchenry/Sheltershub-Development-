
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import PropertyList from './components/PropertyList';
import AdvertSpace from './components/AdvertSpace';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import AllProperties from './components/AllProperties';
import { featuredProperties, latestProperties, adSliderImages, wideAdSliderImages } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header onNavigate={handleNavigate} activePage={currentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <div className="container mx-auto px-4 relative z-10 -mt-11">
            <div className="w-full lg:w-3/4 mx-auto">
              <SearchForm />
            </div>
          </div>
          <main className="container mx-auto px-4 py-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-9">
                <AdvertSpace className="mt-8 mb-8 lg:mt-0 h-24" />
                <div className="my-8 aspect-video">
                  <ImageSlider images={wideAdSliderImages} />
                </div>
                <AdvertSpace className="my-8 h-24" />
                <PropertyList title="Featured Properties" properties={featuredProperties} />
                <AdvertSpace className="my-8 h-24" />
                <PropertyList title="Latest Properties" properties={latestProperties} />
                <div className="my-8">
                  <ImageSlider images={adSliderImages} height="h-64" />
                </div>
                <AdvertSpace className="my-8 h-24" />
              </div>
              <aside className="lg:col-span-3 space-y-8 mt-8 lg:mt-0">
                <AdvertSpace className="h-60" text="Advert Space by Real Estate Company 1 by 1 ratio size" />
                <AdvertSpace className="h-96" text="Advert Space by Real Estate Company 9 by 16 ratio size" />
                <AdvertSpace className="h-60" text="Advert Space by Real Estate Company 1 by 1 ratio size" />
                <div className="bg-red-600 aspect-video flex items-center justify-center p-4 rounded-lg">
                    <span className="text-white font-bold text-center text-xl">YouTube Embed<br/>16 by 9 ratio</span>
                </div>
                <AdvertSpace className="h-60" text="Advert Space by Real Estate Company 1 by 1 ratio size" />
                <AdvertSpace className="h-96" text="Advert Space by Real Estate Company 9 by 16 ratio size" />
                <AdvertSpace className="h-60" text="Advert Space by Real Estate Company 1 by 1 ratio size" />
                <div className="bg-red-600 aspect-video flex items-center justify-center p-4 rounded-lg">
                    <span className="text-white font-bold text-center text-xl">YouTube Embed<br/>16 by 9 ratio</span>
                </div>
              </aside>
            </div>
          </main>
        </>
      ) : (
        <AllProperties onNavigate={handleNavigate} />
      )}
      
      <Footer />
    </div>
  );
};

export default App;
