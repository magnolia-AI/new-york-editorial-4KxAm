import React from 'react';

interface CategoryHeaderProps {
  title: string;
  description: string;
  image: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, description, image }) => {
  return (
    <div className="relative w-full h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-[12vw] md:text-[8vw] font-serif leading-none tracking-tighter mb-6 uppercase italic">
          {title}
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto uppercase">
          {description}
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-foreground/30" />
      </div>
    </div>
  );
};

