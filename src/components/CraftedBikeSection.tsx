import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import whiteMotorcycle from '../assets/f47d6b90094d9f852b27530d96fc07b5a36cc8e5.png';
import redMotorcycle from '../assets/BoxerX125-Variant-Banner.png';

export function CraftedBikeSection() {
  const [activeSlide, setActiveSlide] = useState(3); // Start with middle bike active (index 3 out of 7)
  const [isPaused, setIsPaused] = useState(false);

  // Auto movement functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % motorcycles.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const motorcycles = [
    {
      id: 0,
      name: "Boxer 125 X",
      image: redMotorcycle,
      alt: "Boxer 125 X"
    },
    {
      id: 1,
      name: "Boxer BG 150UG",
      image: whiteMotorcycle,
      alt: "Boxer BG 150UG"
    },
    {
      id: 2,
      name: "Boxer 125 X",
      image: redMotorcycle,
      alt: "Boxer 125 X"
    },
    {
      id: 3,
      name: "Boxer BG 150UG",
      image: whiteMotorcycle,
      alt: "Boxer BG 150UG"
    },
    {
      id: 4,
      name: "Boxer 125 X",
      image: redMotorcycle,
      alt: "Boxer 125 X"
    },
    {
      id: 5,
      name: "Boxer BG 150UG",
      image: whiteMotorcycle,
      alt: "Boxer BG 150UG"
    },
    {
      id: 6,
      name: "Boxer 125 X",
      image: redMotorcycle,
      alt: "Boxer 125 X"
    }
  ];

  // Calculate which bikes to show (always show 3: previous, current, next)
  const getVisibleBikes = () => {
    const visibleBikes = [];
    
    // Previous bike
    const prevIndex = activeSlide > 0 ? activeSlide - 1 : motorcycles.length - 1;
    visibleBikes.push({ ...motorcycles[prevIndex], position: 'left', originalIndex: prevIndex });
    
    // Current bike (center)
    visibleBikes.push({ ...motorcycles[activeSlide], position: 'center', originalIndex: activeSlide });
    
    // Next bike
    const nextIndex = activeSlide < motorcycles.length - 1 ? activeSlide + 1 : 0;
    visibleBikes.push({ ...motorcycles[nextIndex], position: 'right', originalIndex: nextIndex });
    
    return visibleBikes;
  };

  const visibleBikes = getVisibleBikes();

  const goToPrevious = () => {
    setActiveSlide((prev) => prev > 0 ? prev - 1 : motorcycles.length - 1);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000);
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % motorcycles.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="w-4/5 mx-auto">
        {/* Title */}
        <div className="text-left mb-4 lg:mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-wide border-b border-gray-300 pb-4 block w-full">
            CRAFTED BIKE<br className="md:hidden" /> OF YOUR CHOICE
          </h2>
        </div>

        {/* Motorcycles Carousel */}
        <div 
          className="relative overflow-hidden mb-4 lg:mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Mobile Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
            aria-label="Previous motorcycle"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>
          
          <button
            onClick={goToNext}
            className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
            aria-label="Next motorcycle"
          >
            <ChevronRight size={24} className="text-black" />
          </button>

          {/* Mobile: Show only one bike, Large screens: Show three bikes */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-end lg:justify-center transition-all duration-500">
            {/* Mobile single bike view */}
            <div className="lg:hidden">
              <div 
                key={`mobile-${motorcycles[activeSlide].id}`}
                className="flex flex-col items-center text-center transition-all duration-500"
              >
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src={motorcycles[activeSlide].image} 
                    alt={motorcycles[activeSlide].alt} 
                    className="w-full h-auto max-w-md mx-auto transform transition-transform duration-300 hover:scale-105 scale-110"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-xl mb-4 transition-all duration-300 text-center font-bold text-black">
                    {motorcycles[activeSlide].name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Large screen three bike view */}
            {visibleBikes.map((bike, index) => (
              <div 
                key={`${bike.originalIndex}-${bike.position}`}
                className={`hidden lg:flex flex-col items-center justify-between text-center h-full min-h-[500px] transition-all duration-500 cursor-pointer ${
                  bike.position === 'center' ? 'opacity-100' : 'opacity-40'
                }`}
                onClick={() => setActiveSlide(bike.originalIndex)}
              >
                <div className="flex-1 flex items-center justify-center mb-8">
                  <img 
                    src={bike.image} 
                    alt={bike.alt} 
                    className={`w-full h-auto max-w-md mx-auto transform transition-transform duration-300 hover:scale-105 ${
                      bike.position === 'center' ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className={`text-xl mb-6 transition-all duration-300 text-center ${
                    bike.position === 'center' 
                      ? 'font-bold text-black' 
                      : 'font-semibold text-gray-800'
                  }`}>
                    {bike.name}
                  </h3>
                  <div className="flex justify-center">
                    <button className={`border-2 px-8 py-3 rounded-full font-medium transition-all ease-in duration-300 ${
                      bike.position === 'center'
                        ? 'border-black text-black hover:bg-[#0238A5] hover:text-white hover:border-[#0238A5]'
                        : 'border-gray-400 text-gray-600 hover:bg-[#0238A5] hover:text-white hover:border-[#0238A5]'
                    }`}>
                      REQUEST QUOTE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Rectangles and Mobile Button */}
        <div className="flex flex-col items-center gap-4 mt-4">
          {/* Mobile REQUEST QUOTE Button */}
          <div className="lg:hidden">
            <button className="border-2 border-black text-black hover:bg-[#0238A5] hover:text-white hover:border-[#0238A5] px-8 py-3 rounded-full font-medium transition-all ease-in duration-300">
              REQUEST QUOTE
            </button>
          </div>
          
          {/* Navigation Rectangles */}
          <div className="flex justify-center gap-2">
            {motorcycles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveSlide(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 2000); // Resume auto movement after 2 seconds
                }}
                className={`w-8 h-2 rounded-sm transition-all duration-300 ${
                  activeSlide === index 
                    ? 'bg-black' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}