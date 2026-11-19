import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0071f8] text-white rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[150px] py-10 sm:py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs sm:text-sm md:text-base font-normal tracking-wide flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
          <span>Copyright © 2048 LUGX Gaming Company. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <span>
            Design:{' '}
            <a
              href="https://templatemo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200 transition-colors"
            >
              TemplateMo
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;