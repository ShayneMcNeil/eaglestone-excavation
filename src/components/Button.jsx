import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-bold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-[#feba40] text-[#086336] hover:bg-yellow-400 focus:ring-[#feba40]", // Gold button, Emerald text
    secondary: "bg-white text-[#086336] border-2 border-[#086336] hover:bg-gray-50 focus:ring-[#086336]",
    dark: "bg-[#086336] text-white hover:bg-green-800 focus:ring-[#086336]"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
