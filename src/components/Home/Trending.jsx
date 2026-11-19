import React from 'react';
import Button from '../Shared/Button';

const Trending = ({ onNavigateShop = () => {} }) => {
  const trendingGames = [
    {
      id: 1,
      category: 'Action',
      title: 'Warframe',
      oldPrice: '$28',
      price: '$20',
      image:
        'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg',
    },
    {
      id: 2,
      category: 'Action',
      title: 'Tower of Fantasy',
      oldPrice: null,
      price: '$44',
      image:
        'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg',
    },
    {
      id: 3,
      category: 'Action',
      title: 'Super People',
      oldPrice: '$64',
      price: '$44',
      image:
        'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg',
    },
    {
      id: 4,
      category: 'Action',
      title: 'Yu-Gi-Oh!',
      oldPrice: null,
      price: '$32',
      image:
        'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg',
    },
  ];

  return (
    <div>
      {/* سكشن Trending Games */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* الهيدر العلوي للسكشن: العنوان على الشمال وزرار VIEW ALL على اليمين */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="block text-sm font-bold uppercase tracking-wider text-[#ee626b] mb-2">
              TRENDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e1e]">
              Trending Games
            </h2>
          </div>

          {/* زرار VIEW ALL مربوط بـ Our Shop */}
          <Button
            type="button"
            variant="primary"
            onClick={onNavigateShop}
            className="w-fit px-6 py-2.5 text-sm"
          >
            VIEW ALL
          </Button>
        </div>

        {/* شبكة الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingGames.map((game) => (
            <div
              key={game.id}
              className="bg-[#f7f7f7] rounded-[25px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* صورة اللعبة + شارة السعر */}
              <div className="relative w-full h-56 bg-gray-200 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />

                {/* شارة السعر الزرقاء في أعلى يمين الصورة */}
                <div className="absolute top-4 right-4 bg-[#0071f8] text-white rounded-2xl px-3.5 py-2 text-center leading-tight shadow-md">
                  {game.oldPrice && (
                    <span className="block text-xs line-through text-white/80">
                      {game.oldPrice}
                    </span>
                  )}
                  <span className="block text-base font-bold">
                    {game.price}
                  </span>
                </div>
              </div>

              {/* الجزء السفلي للكارت: النوع، الاسم، وأيقونة المتجر */}
              <div className="p-5 flex items-center justify-between gap-3">
                <div className="text-left">
                  <span className="block text-sm text-gray-500 mb-1">
                    {game.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#1e1e1e]">
                    {game.title}
                  </h3>
                </div>

                {/* أيقونة المتجر: هوفر من الأحمر للأزرق على الأيقونة فقط */}
                <button
                  type="button"
                  onClick={onNavigateShop}
                  aria-label={`View ${game.title} in Our Shop`}
                  className="w-11 h-11 rounded-full bg-[#ee626b] hover:bg-[#0071f8] text-white flex items-center justify-center shrink-0 transition-colors duration-300 cursor-pointer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Trending;