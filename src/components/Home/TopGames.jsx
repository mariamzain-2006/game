import React from 'react';
import Button from '../Shared/Button';

const mostPlayedGames = [
  {
    id: 1,
    category: 'Adventure',
    title: 'Assasin Creed',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-01.jpg',
  },
  {
    id: 2,
    category: 'Adventure',
    title: 'Assasin Creed',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-02.jpg',
  },
  {
    id: 3,
    category: 'Adventure',
    title: 'Assasin Creed',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-03.jpg',
  },
  {
    id: 4,
    category: 'Adventure',
    title: 'Assasin Creed',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-04.jpg',
  },
  {
    id: 5,
    category: 'Adventure',
    title: 'Assasin Creed',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-05.jpg',
  },
  {
    id: 6,
    category: 'Adventure',
    title: 'Assasin Creed',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-06.jpg',
  },
];

const TopGames = ({ onNavigateShop = () => {} }) => {
  return (
    <div>
      {/* سكشن TOP GAMES - Most Played */}
      <section className="max-w-[1380px] mx-auto px-3 sm:px-6 lg:px-8 mt-24 mb-10">
        <div className="bg-[#f7f7f7] rounded-[100px] py-16 sm:py-20 px-6 sm:px-10 lg:px-14">
          {/* الهيدر العلوي للسكشن: العنوان على الشمال وزرار VIEW ALL على اليمين */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="block text-sm font-bold uppercase tracking-wider text-[#ee626b] mb-2">
                TOP GAMES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e1e]">
                Most Played
              </h2>
            </div>

            {/* زرار VIEW ALL مربوط بـ Our Shop وهوفره أزرق */}
            <Button
              type="button"
              variant="primary"
              onClick={onNavigateShop}
              className="w-fit px-6 py-2.5 text-sm"
            >
              VIEW ALL
            </Button>
          </div>

          {/* شبكة الـ 6 كروت */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {mostPlayedGames.map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-[25px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
              >
                {/* صورة اللعبة مستديرة من الأربع اتجاهات */}
                <div className="w-full h-44 sm:h-48 bg-gray-200 rounded-[25px] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover rounded-[25px]"
                  />
                </div>

                {/* النوع، الاسم، وزرار EXPLORE */}
                <div className="p-4 flex flex-col items-center justify-between flex-1 w-full">
                  <div className="mb-3">
                    <span className="block text-xs sm:text-sm text-gray-500 mb-1">
                      {game.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#1e1e1e]">
                      {game.title}
                    </h3>
                  </div>

                  {/* زرار EXPLORE وهوفره أزرق */}
                  <Button
                    type="button"
                    variant="primary"
                    onClick={onNavigateShop}
                    className="px-5 py-1.5 text-xs tracking-wide"
                  >
                    EXPLORE
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopGames;