import { useState } from 'react';

const defaultGame = {
  title: 'Call of Duty®: Modern Warfare® II',
  breadcrumbTitle: 'Assasin Creed',
  oldPrice: '$28',
  price: '$22',
  image:
    'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/single-game.jpg',
  shortDesc:
    'LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.',
  gameId: 'COD MMII',
  genre: 'Action, Team, Single',
  tags: 'War, Battle, Royal',
  category: 'Action',
};

const relatedGames = [
  {
    id: 101,
    title: 'Brawlhalla',
    category: 'Action',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-01.jpg',
  },
  {
    id: 102,
    title: 'Warframe',
    category: 'Action',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-05.jpg',
  },
  {
    id: 103,
    title: 'Tower of Fantasy',
    category: 'Action',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-03.jpg',
  },
  {
    id: 104,
    title: 'Super People',
    category: 'Action',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-04.jpg',
  },
  {
    id: 105,
    title: 'Warframe Veilbreaker',
    category: 'Action',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-05.jpg',
  },
];

const Details = ({ game, onNavigateHome, onNavigateShop, onSelectGame }) => {
  const currentGame = { ...defaultGame, ...(game || {}) };
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const handleAddToCart = () => {
    alert(`Added ${quantity} × "${currentGame.title}" to cart!`);
  };

  return (
    <div id="product-details" className="w-full">
      {/* بانر الصفحة */}
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
          <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide mb-4">
            {currentGame.title}
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
            <button
              type="button"
              onClick={onNavigateShop}
              className="hover:underline cursor-pointer"
            >
              Shop
            </button>
            <span className="mx-2">&gt;</span>
            <span>{currentGame.breadcrumbTitle || currentGame.title}</span>
          </nav>
        </div>
      </section>

      {/* تفاصيل اللعبة الرئيسية */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* صورة اللعبة */}
          <div className="lg:col-span-5">
            <img
              src={currentGame.image}
              alt={currentGame.title}
              className="w-full rounded-[25px] object-cover shadow-sm"
            />
          </div>

          {/* البيانات والكمية والـ Meta */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e1e1e] mb-4">
              {currentGame.title}
            </h2>

            <div className="flex items-center gap-3 mb-6">
              {currentGame.oldPrice && (
                <span className="text-lg font-bold text-[#aaa] line-through">
                  {currentGame.oldPrice}
                </span>
              )}
              <span className="text-2xl font-extrabold text-[#0071f8]">
                {currentGame.price}
              </span>
            </div>

            <p className="text-[#4a4a4a] leading-relaxed mb-8">
              {currentGame.shortDesc}
            </p>

            {/* الكمية وزر الإضافة للسلة */}
            <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-gray-200">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value) || 1))
                }
                aria-label="Quantity"
                className="w-20 h-12 rounded-full bg-[#f7f7f7] border border-gray-200 text-center font-bold text-[#1e1e1e] focus:outline-none focus:border-[#0071f8]"
              />
              <button
                type="button"
                onClick={handleAddToCart}
                className="h-12 px-7 rounded-full bg-[#ee626b] hover:bg-[#0071f8] text-white font-semibold uppercase text-xs sm:text-sm tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
              >
                <i className="fa fa-shopping-bag" />
                ADD TO CART
              </button>
            </div>

            {/* Game ID / Genre / Multi-tags */}
            <ul className="pt-6 space-y-3 text-sm">
              <li className="flex items-center gap-6">
                <span className="w-28 text-[#7a7a7a]">Game ID:</span>
                <span className="text-[#0071f8] font-medium">
                  {currentGame.gameId}
                </span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-28 text-[#7a7a7a]">Genre:</span>
                <span className="text-[#0071f8] font-medium">
                  {currentGame.genre}
                </span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-28 text-[#7a7a7a]">Multi-tags:</span>
                <span className="text-[#0071f8] font-medium">
                  {currentGame.tags}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* سكشن Description & Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#f7f7f7] rounded-[25px] p-7 sm:p-12">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab('description')}
              className={`text-lg sm:text-xl font-bold transition-colors cursor-pointer ${
                activeTab === 'description'
                  ? 'text-[#0071f8]'
                  : 'text-[#1e1e1e] hover:text-[#0071f8]'
              }`}
            >
              Description
            </button>

            <span className="h-5 w-[1px] bg-gray-300" aria-hidden="true" />

            <button
              type="button"
              onClick={() => setActiveTab('reviews')}
              className={`text-lg sm:text-xl font-bold transition-colors cursor-pointer ${
                activeTab === 'reviews'
                  ? 'text-[#0071f8]'
                  : 'text-[#1e1e1e] hover:text-[#0071f8]'
              }`}
            >
              Reviews (3)
            </button>
          </div>

          {activeTab === 'description' ? (
            <div className="space-y-5 text-[#4a4a4a] leading-relaxed text-sm sm:text-base">
              <p>
                You can search for more templates on Google Search using keywords
                such as &quot;templatemo digital marketing&quot;,
                &quot;templatemo one-page&quot;, &quot;templatemo gallery&quot;,
                etc. Please tell your friends about our website. If you need a
                variety of HTML templates, you may visit Tooplate and Too CSS
                websites.
              </p>
              <p>
                Coloring book air plant shabby chic, crucifix normcore raclette
                cred swag artisan activated charcoal. PBR&amp;B fanny pack pok pok
                gentrify truffaut kitsch helvetica jean shorts edison bulb poutine
                next level humblebrag la croix adaptogen. Hashtag poke literally
                locavore, beard marfa kogi bruh artisan succulents seitan tonx
                waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo
                irony cray hell of bitters asymmetrical gluten-free art party raw
                denim chillwave tousled try-hard succulents street art.
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-[#4a4a4a] text-sm sm:text-base">
              <div className="bg-white rounded-2xl p-4">
                <p className="font-bold text-[#1e1e1e]">Ahmed — ★★★★★</p>
                <p className="mt-1">Great gameplay and smooth performance.</p>
              </div>
              <div className="bg-white rounded-2xl p-4">
                <p className="font-bold text-[#1e1e1e]">Sara — ★★★★★</p>
                <p className="mt-1">Worth the discount price, super fun.</p>
              </div>
              <div className="bg-white rounded-2xl p-4">
                <p className="font-bold text-[#1e1e1e]">Omar — ★★★★☆</p>
                <p className="mt-1">Awesome action scenes and story mode.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* سكشن Related Games */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[#ee626b] font-bold uppercase text-xs sm:text-sm tracking-wider block mb-2">
              {currentGame.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1e1e1e]">
              Related Games
            </h2>
          </div>

          <button
            type="button"
            onClick={onNavigateShop}
            className="px-6 py-3 rounded-full bg-[#ee626b] hover:bg-[#0071f8] text-white font-bold uppercase text-xs tracking-wider transition-colors cursor-pointer"
          >
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {relatedGames.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectGame?.(item)}
              className="bg-[#0071f8] rounded-[25px] overflow-hidden cursor-pointer group transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="py-4 px-3 text-center text-white font-bold text-base">
                {item.category}
              </div>
              <div className="overflow-hidden rounded-[25px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Details;