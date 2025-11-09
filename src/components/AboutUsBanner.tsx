import bannerImage from 'figma:asset/c45aca15b07136d92ac49638dd814e25c2ac9034.png';

export function AboutUsBanner() {
  return (
    <div 
      className="relative w-full min-h-[320px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 w-[80%] mx-auto h-full min-h-[320px] flex items-end pb-12">
        <h1 
          className="text-white text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide"
          style={{ 
            fontFamily: "'Anton', sans-serif",
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)'
          }}
        >
          About Us
        </h1>
      </div>
    </div>
  );
}
