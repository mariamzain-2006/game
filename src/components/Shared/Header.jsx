import React, { useState } from 'react';
import Button from './Button';

const Header = ({ activePage = 'home', onNavigate = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Our Shop' },
    { id: 'product-details', label: 'Product Details' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  const handleSelectPage = (pageId) => {
    onNavigate(pageId);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0071f8] rounded-b-[25px] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* مكان اللوجو */}
        <button
          type="button"
          onClick={() => handleSelectPage('home')}
          className="flex items-center cursor-pointer"
        >
          <img
            src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/logo.png"
            alt="LUGX Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </button>

        {/* روابط الديسكتوب */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-3">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleSelectPage(link.id)}
                className={`px-5 py-2 rounded-full text-[15px] font-medium text-white transition-all duration-300 cursor-pointer ${
                  isActive ? 'bg-white/15' : 'hover:bg-white/15'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="ml-2">
            <Button variant="primary" onClick={() => handleSelectPage('sign-in')}>
              SIGN IN
            </Button>
          </div>
        </nav>

        {/* أيقونة الثلاث شرط للموبايل */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/15 transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* قائمة الموبايل لما تضغطي على الأيقونة */}
      {isOpen && (
        <div className="md:hidden bg-[#0071f8] border-t border-white/15 rounded-b-[25px] px-4 pb-5 pt-2">
          <nav className="flex flex-col space-y-2 text-center">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleSelectPage(link.id)}
                  className={`py-2.5 rounded-full text-[15px] font-medium text-white transition cursor-pointer ${
                    isActive ? 'bg-white/15' : 'hover:bg-white/15'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-2">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => handleSelectPage('sign-in')}
              >
                SIGN IN
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;