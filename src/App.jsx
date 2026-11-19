import { useState } from 'react';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import HeroSection from './components/Home/HeroSection';
import Trending from './components/Home/Trending';
import TopGames from './components/Home/TopGames';
import TopCategories from './components/Home/TopCategories';
import LastSection from './components/Home/LastSection';
import Products from './components/OurShop/Products';
import ShopGames from './components/OurShop/ShopGames';
import Details from './components/ProductDetails/Details';
import Contact from './components/ContactUs/Contact';

function App() {
  const [activePage, setActivePage] = useState('contact');
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeFilter, setActiveFilter] = useState('SHOW ALL');

  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGame = (game) => {
    setSelectedGame(game);
    navigateTo('product-details');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Header activePage={activePage} onNavigate={navigateTo} />

      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <HeroSection onNavigateShop={() => navigateTo('shop')} />
            <Trending
              onNavigateShop={() => navigateTo('shop')}
              onCardClick={handleSelectGame}
            />
            <TopGames onNavigateShop={() => navigateTo('shop')} />
            <TopCategories onNavigateShop={() => navigateTo('shop')} />
            <LastSection onNavigateShop={() => navigateTo('shop')} />
          </>
        )}

        {activePage === 'shop' && (
          <>
            <Products
              onNavigateHome={() => navigateTo('home')}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            <ShopGames
              activeFilter={activeFilter}
              onCardClick={handleSelectGame}
            />
          </>
        )}

        {activePage === 'product-details' && (
          <Details
            game={selectedGame}
            onNavigateHome={() => navigateTo('home')}
            onNavigateShop={() => navigateTo('shop')}
            onSelectGame={handleSelectGame}
          />
        )}
       {activePage === 'contact-us' && (
          <Contact onNavigateHome={() => navigateTo('home')} />
        )}

      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;