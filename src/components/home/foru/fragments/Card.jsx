import React from 'react';

export const Card = (props) => {
  const { text, gradient1, gradient2 } = props;
  
  const gradientStyle = {
    background: `linear-gradient(to right, ${gradient1}, ${gradient2})`,
  };

  return (
    <div 
      className="sticky top-0 h-[4rem] w-[13rem] text-white font-semibold rounded-xl pt-1 px-2"
      style={gradientStyle}
    >
      <h1>{text}</h1>
    </div>
  );
};
