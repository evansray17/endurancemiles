import { ImageWithFallback } from './figma/ImageWithFallback';
import garageBackground from 'figma:asset/77b4254dea1f2b85f1bd28b6bc20176d5c9ce426.png';
import motorcycleImage from 'figma:asset/90219d3bb3ab51ac376f68ee1f0634236ce03921.png';

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section 
      className="min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] relative overflow-hidden"
      style={{
        backgroundImage: `url(${garageBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20 z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 w-4/5 mx-auto px-4 sm:px-6 lg:px-4 h-full">
        {/* Mobile: Flex Column Layout | Large: Grid 2-Column Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 items-center lg:items-center h-full min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] py-8 lg:py-16">
          
          {/* Text Content - Mobile: Top | Large: Left Column */}
          <div className="text-white z-10 text-center lg:text-left flex flex-col justify-center order-1 lg:order-1 mb-8 lg:mb-0">
            <h1 
              className="font-extrabold mb-4 sm:mb-6 lg:mb-8"
              style={{
                color: 'white',
                fontSize: 'clamp(48px, 10vw, 80px)',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '800',
                lineHeight: 'clamp(52px, 10vw, 85px)',
                wordWrap: 'break-word'
              }}
            >
              A SMARTER<br />
              NEW BAJAJ
            </h1>
            <div 
              onClick={() => onNavigate?.('Request Quote')}
              className="px-10 py-4 bg-white hover:bg-[#0238A5] rounded-[100px] outline outline-1 outline-offset-[-1px] outline-blue-800 inline-flex justify-center items-center gap-2.5 cursor-pointer group mt-4 sm:mt-6 mx-auto lg:mx-0 w-fit"
              style={{
                transition: 'background-color 599ms ease-out'
              }}
            >
              <div 
                className="justify-start text-black group-hover:text-white text-sm sm:text-base lg:text-lg font-extrabold font-['Plus_Jakarta_Sans'] leading-tight"
                style={{
                  transition: 'color 599ms ease-out'
                }}
              >
                REQUEST QUOTE
              </div>
            </div>
          </div>
          
          {/* Motorcycle Image - Mobile: Bottom | Large: Right Column */}
          <div className="flex justify-center lg:justify-end items-center order-2 lg:order-2 mt-8 lg:mt-0 w-full">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <ImageWithFallback
                src={motorcycleImage}
                alt="Bajaj Motorcycle"
                className="w-full h-auto object-contain drop-shadow-2xl transform scale-125"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}