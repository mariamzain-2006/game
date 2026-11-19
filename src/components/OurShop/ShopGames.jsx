const shopGames = [
  {
    id: 1,
    category: 'Action',
    title: 'Warframe',
    oldPrice: '$36',
    price: '$24',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg',
  },
  {
    id: 2,
    category: 'Action',
    title: 'Tower of Fantasy',
    oldPrice: '$32',
    price: '$22',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg',
  },
  {
    id: 3,
    category: 'Action',
    title: 'Super People',
    oldPrice: '$45',
    price: '$30',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg',
  },
  {
    id: 4,
    category: 'Action',
    title: 'Yu-Gi-Oh!',
    oldPrice: '$32',
    price: '$22',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg',
  },
  {
    id: 5,
    category: 'Adventure',
    title: 'Assasin Creed',
    oldPrice: '$38',
    price: '$26',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg',
  },
  {
    id: 6,
    category: 'Adventure',
    title: 'Assasin Creed',
    oldPrice: '$30',
    price: '$20',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg',
  },
  {
    id: 7,
    category: 'Strategy',
    title: 'Assasin Creed',
    oldPrice: '$32',
    price: '$22',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg',
  },
  {
    id: 8,
    category: 'Racing',
    title: 'Assasin Creed',
    oldPrice: '$32',
    price: '$22',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg',
  },
  {
    id: 9,
    category: 'Adventure',
    title: 'Assasin Creed',
    oldPrice: '$28',
    price: '$20',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg',
  },
  {
    id: 10,
    category: 'Strategy',
    title: 'Assasin Creed',
    oldPrice: '$26',
    price: '$18',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg',
  },
  {
    id: 11,
    category: 'Racing',
    title: 'Assasin Creed',
    oldPrice: '$32',
    price: '$24',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg',
  },
  {
    id: 12,
    category: 'Strategy',
    title: 'Assasin Creed',
    oldPrice: '$45',
    price: '$30',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg',
  },
];

const ShopGames = ({ activeFilter = 'SHOW ALL', onCardClick }) => {
  const filteredGames =
    activeFilter === 'SHOW ALL'
      ? shopGames
      : shopGames.filter(
          (game) => game.category.toUpperCase() === activeFilter
        );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            onClick={() => onCardClick?.(game)}
            className="group bg-[#f7f7f7] rounded-[25px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden rounded-[25px]">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-4 right-4 bg-[#0071f8] text-white font-bold px-3 py-1.5 rounded-[10px] text-sm">
                {game.oldPrice && (
                  <span className="line-through text-white/75 text-xs mr-1.5 block leading-none mb-0.5">
                    {game.oldPrice}
                  </span>
                )}
                {game.price}
              </span>
            </div>

            <div className="p-5 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs text-[#7a7a7a] block mb-1">
                  {game.category}
                </span>
                <h3 className="text-base font-bold text-[#1e1e1e] group-hover:text-[#0071f8] transition-colors">
                  {game.title}
                </h3>
              </div>

              <span className="w-10 h-10 rounded-full bg-[#ee626b] text-white flex items-center justify-center shrink-0 group-hover:bg-[#0071f8] transition-colors">
                <i className="fa fa-shopping-bag text-sm" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopGames;