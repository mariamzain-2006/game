import { useState } from 'react';
import ShopGames from './ShopGames';

const filters = ['SHOW ALL', 'ADVENTURE', 'STRATEGY', 'RACING'];

const Products = ({ onNavigateHome, onSelectGame }) => {
  const [activeFilter, setActiveFilter] = useState('SHOW ALL');

  return (
    <div id="our-shop" className="w-full">
      {/* البانر بتاعك زي ما هو */}
      <section
        style={{
          background:
            'linear-gradient(120deg, #0071f8 0%, #0d79ff 55%, #2488ff 100%)',
        }}
        className="relative w-full text-white pt-36 sm:pt-44 pb-24 sm:pb-32 rounded-b-[90px] sm:rounded-b-[130px] lg:rounded-b-[170px] overflow-hidden text-center"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-32 w-[620px] h-[620px] sm:w-[820px] sm:h-[820px] rounded-full bg-white/[0.08]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-6 -right-12 w-[480px] h-[480px] sm:w-[660px] sm:h-[660px] rounded-full bg-white/[0.11]"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide mb-4">
            OUR SHOP
          </h1>
          <nav
            aria-label="Breadcrumb"
            className="text-sm sm:text-base font-medium text-white/95"
          >
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:underline cursor-pointer"
            >
              Home
            </button>
            <span className="mx-2">&gt;</span>
            <span>Our Shop</span>
          </nav>
        </div>
      </section>

      {/* أزرار الفلترة */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#ee626b] text-white shadow-sm'
                    : 'bg-[#f7f7f7] text-[#1e1e1e] hover:text-[#ee626b]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* الـ 12 كارت */}
      <ShopGames activeFilter={activeFilter} onCardClick={onSelectGame} />
    </div>
  );
};

export default Products;