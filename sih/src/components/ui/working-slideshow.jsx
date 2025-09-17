import React, { useState, createContext, useContext, useCallback } from 'react';
import { motion } from 'framer-motion';

// Simple cn utility
const cn = (...inputs) => inputs.filter(Boolean).join(' ');

// Context for managing active slide
const HoverSliderContext = createContext(undefined);

function useHoverSliderContext() {
  const context = useContext(HoverSliderContext);
  if (context === undefined) {
    throw new Error('useHoverSliderContext must be used within a HoverSliderProvider');
  }
  return context;
}

// Split text into characters for animation
function splitText(text) {
  const words = text.split(' ').map((word) => word.concat(' '));
  const characters = words.map((word) => word.split('')).flat(1);
  return { words, characters };
}

// Main HoverSlider component
export const HoverSlider = ({ children, className, ...props }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlide = useCallback((index) => setActiveSlide(index), []);

  return (
    <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
      <div className={className} {...props}>
        {children}
      </div>
    </HoverSliderContext.Provider>
  );
};

// Text with stagger hover animation
export const TextStaggerHover = ({ text, index, className, ...props }) => {
  const { activeSlide, changeSlide } = useHoverSliderContext();
  const { characters } = splitText(text);
  const isActive = activeSlide === index;
  const handleMouse = () => changeSlide(index);

  return (
    <span
      className={cn('relative inline-block origin-bottom overflow-hidden cursor-pointer', className)}
      onMouseEnter={handleMouse}
      {...props}
    >
      {characters.map((char, charIndex) => (
        <span key={`${char}-${charIndex}`} className="relative inline-block overflow-hidden">
          <motion.span
            className="inline-block opacity-20"
            initial={{ y: '0%' }}
            animate={isActive ? { y: '-110%' } : { y: '0%' }}
            transition={{
              delay: charIndex * 0.025,
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {char}
            {char === ' ' && charIndex < characters.length - 1 && <>&nbsp;</>}
          </motion.span>
          <motion.span
            className="absolute left-0 top-0 inline-block opacity-100"
            initial={{ y: '110%' }}
            animate={isActive ? { y: '0%' } : { y: '110%' }}
            transition={{
              delay: charIndex * 0.025,
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// Image wrapper with grid layout
export const HoverSliderImageWrap = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'grid overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:size-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Individual image with clip-path animation
export const HoverSliderImage = ({ index, imageUrl, className, ...props }) => {
  const { activeSlide } = useHoverSliderContext();

  const clipPathVariants = {
    visible: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
    hidden: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)',
    },
  };

  return (
    <motion.img
      src={imageUrl}
      className={cn('inline-block align-middle', className)}
      variants={clipPathVariants}
      animate={activeSlide === index ? 'visible' : 'hidden'}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
      {...props}
    />
  );
};

// Demo component with Sikkim content
export const SikkimWorkingSlideshow = () => {
  const slides = [
    {
      id: 'slide-1',
      title: 'Mountain Peaks',
      imageUrl: '/imagesforme/Sunrise_over_Kangchenjunga.jpg',
    },
    {
      id: 'slide-2',
      title: 'Buddhist Culture',
      imageUrl: '/imagesforme/Sacred img.png',
    },
    {
      id: 'slide-3',
      title: 'Heritage Sites',
      imageUrl: '/imagesforme/Pemayangtse Monastery.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-12">
      <HoverSlider className="min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-6xl">
          <h3 className="mb-8 text-blue-600 text-sm font-medium capitalize tracking-wide text-center">
            / Discover Sikkim
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <div className="flex flex-col space-y-6">
              {slides.map((slide, index) => (
                <TextStaggerHover
                  key={slide.title}
                  index={index}
                  className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-gray-800 hover:text-blue-700 transition-colors duration-300"
                  text={slide.title}
                />
              ))}
            </div>
            
            {/* Images Side */}
            <HoverSliderImageWrap className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <HoverSliderImage
                  key={slide.id}
                  index={index}
                  imageUrl={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              ))}
            </HoverSliderImageWrap>
          </div>
        </div>
      </HoverSlider>
    </div>
  );
};
