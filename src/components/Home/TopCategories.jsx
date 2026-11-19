import React from 'react';

const topCategories = [
  {
    id: 1,
    title: 'Action',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-01.jpg',
  },
  {
    id: 2,
    title: 'Action',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-05.jpg',
  },
  {
    id: 3,
    title: 'Action',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-03.jpg',
  },
  {
    id: 4,
    title: 'Action',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-04.jpg',
  },
  {
    id: 5,
    title: 'Action',
    image:
      'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-05.jpg',
  },
];

const TopCategories = ({ onNavigateShop = () => {} }) => {
  return (
    <div>
      {/* سكشن CATEGORIES - Top Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16">
        {/* العنوان في المنتصف */}
        <div className="text-center mb-12">
          <span className="block text-sm font-bold uppercase tracking-wider text-[#ee626b] mb-2">
            CATEGORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e1e]">
            Top Categories
          </h2>
        </div>

        {/* شبكة الـ 5 كروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={onNavigateShop}
              className="bg-[#0071f8] hover:bg-[#0059c4] rounded-[25px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group text-left cursor-pointer"
            >
              {/* اسم التصنيف في الجزء الأزرق العلوي */}
              <div className="py-4 px-4 text-center w-full">
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* صورة التصنيف مستديرة من الأربع اتجاهات */}
              <div className="w-full h-52 bg-gray-200 rounded-[25px] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover rounded-[25px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopCategories;