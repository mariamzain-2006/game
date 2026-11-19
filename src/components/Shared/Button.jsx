import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  const baseStyles = "px-6 py-2.5 rounded-full text-[15px] font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer";
  
  const variants = {
    // الأساسي أحمر، والهوفر أزرق
    primary: "bg-[#ee626b] text-white hover:bg-[#0071f8] hover:shadow-md",
    // العكس: أساسي أزرق، وهوفر أحمر (لو احتاجتيه في زرار تاني)
    blue: "bg-[#0071f8] text-white hover:bg-[#ee626b] hover:shadow-md",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;