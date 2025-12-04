
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import PropertyList from './components/PropertyList';
import AdvertSpace from './components/AdvertSpace';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import AllProperties from './components/AllProperties';
import LoginPage from './components/LoginPage';
import SingleProperty from './components/SingleProperty';
import AddPropertyPage from './components/AddPropertyPage';
import AgenciesPage from './components/AgenciesPage';
import SingleAgencyPage from './components/SingleAgencyPage';
import AddAgencyPage from './components/AddAgencyPage';
import AddAgentPage from './components/AddAgentPage';
import AddDeveloperPage from './components/AddDeveloperPage';
import DevelopersPage from './components/DevelopersPage';
import SingleDeveloperPage from './components/SingleDeveloperPage';
import SearchResultsPage from './components/SearchResultsPage';
import SitemapPage from './components/SitemapPage';
import NotFoundPage from './components/NotFoundPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import EmailVerificationPage from './components/EmailVerificationPage';
import ResetPasswordPage from './components/ResetPasswordPage';

// Admin Pages
import AdminDashboard from './components/admin/AdminDashboard';
import AdminProperties from './components/admin/AdminProperties';
import AdminAgents from './components/admin/AdminAgents';
import AdminAgencies from './components/admin/AdminAgencies';
import AdminDevelopers from './components/admin/AdminDevelopers';
import AdminUsers from './components/admin/AdminUsers';
import AdminBlog from './components/admin/AdminBlog';
import AdminSubscriptions from './components/admin/AdminSubscriptions';
import AdminSettings from './components/admin/AdminSettings';
import AdminReports from './components/admin/AdminReports';

// Developer Pages
import DeveloperDashboard from './components/developer/DeveloperDashboard';
import DeveloperAddProject from './components/developer/DeveloperAddProject';
import DeveloperPerformance from './components/developer/DeveloperPerformance';
import DeveloperMessages from './components/developer/DeveloperMessages';
import DeveloperSettings from './components/developer/DeveloperSettings';

// Agent Pages
import AgentProperties from './components/agent/AgentProperties';
import AgentAddProperty from './components/agent/AgentAddProperty';
import AgentPerformance from './components/agent/AgentPerformance';
import AgentMessages from './components/agent/AgentMessages';
import AgentSettings from './components/agent/AgentSettings';

import { featuredProperties, latestProperties, adSliderImages, wideAdSliderImages } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (currentPage === 'login') return <LoginPage onNavigate={handleNavigate} />;
    if (currentPage === 'forgot-password') return <ForgotPasswordPage onNavigate={handleNavigate} />;
    if (currentPage === 'reset-password') return <ResetPasswordPage onNavigate={handleNavigate} />;
    if (currentPage === 'email-verification') return <EmailVerificationPage onNavigate={handleNavigate} />;
    
    // Admin Routes
    if (currentPage === 'admin-dashboard') return <AdminDashboard onNavigate={handleNavigate} />;
    if (currentPage === 'admin-properties') return <AdminProperties onNavigate={handleNavigate} />;
    if (currentPage === 'admin-agents') return <AdminAgents onNavigate={handleNavigate} />;
    if (currentPage === 'admin-agencies') return <AdminAgencies onNavigate={handleNavigate} />;
    if (currentPage === 'admin-developers') return <AdminDevelopers onNavigate={handleNavigate} />;
    if (currentPage === 'admin-users') return <AdminUsers onNavigate={handleNavigate} />;
    if (currentPage === 'admin-blog') return <AdminBlog onNavigate={handleNavigate} />;
    if (currentPage === 'admin-subscriptions') return <AdminSubscriptions onNavigate={handleNavigate} />;
    if (currentPage === 'admin-settings') return <AdminSettings onNavigate={handleNavigate} />;
    if (currentPage === 'admin-reports') return <AdminReports onNavigate={handleNavigate} />;

    // Developer Dashboard Routes
    if (currentPage === 'developer-dashboard') return <DeveloperDashboard onNavigate={handleNavigate} />;
    if (currentPage === 'developer-add-project') return <DeveloperAddProject onNavigate={handleNavigate} />;
    if (currentPage === 'developer-performance') return <DeveloperPerformance onNavigate={handleNavigate} />;
    if (currentPage === 'developer-messages') return <DeveloperMessages onNavigate={handleNavigate} />;
    if (currentPage === 'developer-settings') return <DeveloperSettings onNavigate={handleNavigate} />;

    // Agent Dashboard Routes
    if (currentPage === 'agent-properties') return <AgentProperties onNavigate={handleNavigate} />;
    if (currentPage === 'agent-add-property') return <AgentAddProperty onNavigate={handleNavigate} />;
    if (currentPage === 'agent-performance') return <AgentPerformance onNavigate={handleNavigate} />;
    if (currentPage === 'agent-messages') return <AgentMessages onNavigate={handleNavigate} />;
    if (currentPage === 'agent-settings') return <AgentSettings onNavigate={handleNavigate} />;


    if (currentPage === 'all-properties') {
      return (
        <>
          <Header onNavigate={handleNavigate} activePage={currentPage} />
          <AllProperties onNavigate={handleNavigate} />
          <Footer onNavigate={handleNavigate} />
        </>
      );
    }

    if (currentPage === 'property-detail') return <SingleProperty onNavigate={handleNavigate} />;
    if (currentPage === 'add-property') return <AddPropertyPage onNavigate={handleNavigate} />;
    if (currentPage === 'agencies') return <AgenciesPage onNavigate={handleNavigate} />;
    if (currentPage === 'agency-detail') return <SingleAgencyPage onNavigate={handleNavigate} />;
    if (currentPage === 'add-agency') return <AddAgencyPage onNavigate={handleNavigate} />;
    if (currentPage === 'add-agent') return <AddAgentPage onNavigate={handleNavigate} />;
    if (currentPage === 'add-developer') return <AddDeveloperPage onNavigate={handleNavigate} />;
    if (currentPage === 'developers') return <DevelopersPage onNavigate={handleNavigate} />;
    if (currentPage === 'developer-detail') return <SingleDeveloperPage onNavigate={handleNavigate} />;
    if (currentPage === 'search-results') return <SearchResultsPage onNavigate={handleNavigate} />;
    if (currentPage === 'sitemap') return <SitemapPage onNavigate={handleNavigate} />;
    if (currentPage === '404') return <NotFoundPage onNavigate={handleNavigate} />;

    // Home Page
    return (
      <>
        <Header onNavigate={handleNavigate} activePage={currentPage} />
        <Hero />
        <div className="container mx-auto px-4 relative z-10 -mt-11">
          <div className="w-full lg:w-3/4 mx-auto">
            <SearchForm onSearch={() => handleNavigate('search-results')} />
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
              <PropertyList 
                title="Featured Properties" 
                properties={featuredProperties} 
                onPropertyClick={() => handleNavigate('property-detail')}
              />
              <AdvertSpace className="my-8 h-24" />
              <PropertyList 
                title="Latest Properties" 
                properties={latestProperties} 
                onPropertyClick={() => handleNavigate('property-detail')}
              />
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
        <Footer onNavigate={handleNavigate} />
      </>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {renderContent()}
    </div>
  );
};

export default App;
