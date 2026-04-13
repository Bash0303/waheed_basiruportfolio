import React from 'react';

const Title = ({ title, des, className = "" }) => {
  return (
    <div className={`flex flex-col gap-4 font-titleFont mb-14 ${className}`}>
      <h3 className="text-sm uppercase font-bold text-blue-600 tracking-widest">
        {title}
      </h3>
      {/* Using 'inherit' or a conditional check ensures that the heading 
          color changes if you pass a text-color class from the parent 
      */}
      <h1 className={`text-4xl md:text-5xl font-bold capitalize ${
        className.includes('text-white') ? 'text-white' : 'text-midnightBlue'
      }`}>
        {des}
      </h1>
    </div>
  );
};

export default Title;