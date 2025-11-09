import bannerImage from 'figma:asset/aa6722c20636a18ef29440f2412f3c1e48f2f29d.png';

export function BannerSection() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="w-[80%] mx-auto">
        <div className="flex justify-center items-center">
          <img 
            src={bannerImage} 
            alt="Boxer - Made Stronger to Last Longer" 
            className="w-full max-w-4xl h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
