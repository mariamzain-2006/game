import React from 'react';
import Button from '../Shared/Button';

const ctaImage =
  'https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-02.jpg';

const LastSection = ({ onNavigateShop = () => {} }) => {
  return (
    <div>
      {/* سكشن OUR SHOP & NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24">
        <div className="relative flex flex-col items-center lg:block lg:min-h-[760px]">
          {/* CENTER IMAGE */}
          <div className="w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[520px] h-[290px] sm:h-[380px] lg:h-[510px] rounded-[25px] overflow-hidden bg-gray-200 shadow-md z-0 lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
            <img
              src={ctaImage}
              alt="Pre-Order Featured Game"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CARDS */}
          <div className="w-full flex flex-col gap-7 mt-6 lg:mt-0 lg:block relative z-10">
            {/* OUR SHOP CARD */}
            <div className="w-full lg:w-[44%] lg:min-h-[530px] bg-[#f7f7f7] rounded-[25px] p-7 sm:p-9 lg:p-11 shadow-[0_12px_35px_rgba(0,0,0,0.06)] text-left flex flex-col justify-between lg:absolute lg:left-0 lg:top-[95px]">
              <div>
                <span className="block text-[14px] font-bold uppercase tracking-wider text-[#ee626b] mb-3">
                  OUR SHOP
                </span>

                <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold text-[#1e1e1e] leading-[1.25] mb-5">
                  Go Pre-Order Buy &amp; Get Best{' '}
                  <span className="text-[#0071f8]">Prices</span> For You!
                </h2>

                <p className="text-[15px] text-gray-600 leading-[1.6] mb-7">
                  Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
                  incididunt.
                </p>
              </div>

              <div>
                <Button
                  type="button"
                  variant="primary"
                  onClick={onNavigateShop}
                  className="px-7 py-3 text-sm"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>

            {/* NEWSLETTER CARD */}
            <div className="w-full lg:w-[44%] lg:min-h-[530px] bg-[#f7f7f7] rounded-[25px] p-7 sm:p-9 lg:p-11 shadow-[0_12px_35px_rgba(0,0,0,0.06)] text-left flex flex-col justify-between lg:absolute lg:right-0 lg:top-[250px]">
              <div>
                <span className="block text-[14px] font-bold uppercase tracking-wider text-[#ee626b] mb-3">
                  NEWSLETTER
                </span>

                <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold text-[#1e1e1e] leading-[1.25] mb-7">
                  Get Up To $100 Off Just Buy{' '}
                  <span className="text-[#0071f8]">Subscribe</span> Newsletter!
                </h2>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full bg-white rounded-full h-[50px] pl-5 pr-0 flex items-center justify-between shadow-sm overflow-hidden"
              >
                <input
                  type="email"
                  placeholder="Your email..."
                  className="flex-1 min-w-0 h-full bg-transparent text-[#1e1e1e] placeholder-gray-400 text-sm focus:outline-none pr-3"
                />

                <Button
                  type="submit"
                  variant="primary"
                  className="h-[50px] px-5 sm:px-6 rounded-full shrink-0 flex items-center justify-center text-xs sm:text-sm"
                >
                  SUBSCRIBE NOW
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LastSection;