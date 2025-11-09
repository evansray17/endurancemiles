import boxer150Image from 'figma:asset/a6d74c1ca605009aeda0d58a7090ce138c3927cd.png';

export function Boxer150Banner() {
  return (
    <div 
      className="relative w-full min-h-[320px] bg-cover bg-center"
      style={{ backgroundImage: `url(${boxer150Image})` }}
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
          Boxer 150
        </h1>
      </div>
    </div>
  );
}
