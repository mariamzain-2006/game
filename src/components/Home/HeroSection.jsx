import React from 'react';
import Button from '../Shared/Button';

const HeroSection = () => {
  const features = [
    {
      title: 'FREE STORAGE',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 12v9m0 0l-3-3m3 3l3-3" />
        </svg>
      ),
    },
    {
      title: 'USER MORE',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'REPLY READY',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'EASY LAYOUT',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM16 15a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section
        style={{
          background: 'linear-gradient(125deg, #0071f8 0%, #0062d6 50%, #1b82ff 100%)',
        }}
        className="relative w-full text-white pt-32 pb-36 md:pb-44 rounded-b-[90px] sm:rounded-b-[130px] lg:rounded-b-[170px] overflow-hidden"
      >
        {/* الموجة / الإضاءة الدائرية الخفيفة على اليمين زي القالب */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-white/[0.06]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-7/12 text-left space-y-6">
              <span className="block text-base sm:text-lg font-medium uppercase tracking-widest text-white/95">
                Welcome to LUGX
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-tight uppercase">
                Best Gaming Site
                <span className="block relative w-fit mt-1">
                  Ever!
                  <svg
                    className="w-full h-3.5 mt-1 text-[#ee626b]"
                    viewBox="0 0 200 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 10C65 3 135 3 197 10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-sm sm:text-base text-white/90 max-w-xl leading-relaxed">
                LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.
              </p>

              {/* حقل البحث + زرار بنفس ارتفاع الـ Input */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full max-w-md bg-white rounded-full  pl-5 flex items-center h-12 sm:h-13 shadow-lg"
              >
                <input
                  type="text"
                  placeholder="Type Something"
                  className="flex-1 h-full bg-transparent text-[#1e1e1e] placeholder-gray-400 text-sm sm:text-base focus:outline-none pr-3"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="shrink-0 text-xs h-full sm:text-sm px-5 py-2.5"
                >
                  SEARCH NOW
                </Button>
              </form>
            </div>

            {/* صورة الشخصية + شارة السعر $22 + شارة الخصم -40% */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] group">
                <img
                  src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/banner-image.jpg"
                  alt="Featured Game"
                  className="w-full h-[380px] sm:h-[430px] object-cover rounded-[28px] shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                />

                <span className="absolute top-4 right-4 bg-[#0071f8] text-white font-bold text-lg sm:text-xl px-4 py-1.5 rounded-full shadow-md transition-transform duration-300 group-hover:scale-105">
                  $22
                </span>

                <span className="absolute -bottom-5 -left-5 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#ee626b] text-white font-extrabold text-2xl sm:text-3xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:rotate-6">
                  -40%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الـ 4 كروت: الكارت ثابت، والهوفر (تغيير اللون + حركة) على الأيقونة بس */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[25px] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center text-center"
            >
              {/* الهوفر هنا على دايرة الأيقونة فقط */}
              <div className="w-20 h-20 rounded-full bg-[#0071f8] hover:bg-[#ee626b] hover:scale-110 transition-all duration-300 flex items-center justify-center mb-5 cursor-pointer">
                {item.icon}
              </div>

              {/* الكلام ثابت بدون أي hover */}
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide text-[#1e1e1e] select-none">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      

      

      
    </>
  );
};

export default HeroSection;