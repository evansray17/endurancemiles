import economicalBikesImage from 'figma:asset/28f00f6d0a4eef2c8f914f96eb0f9ad13d5bb7ca.png';

export function EconomicalBikeSection() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="w-4/5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[32px] lg:text-[40px] font-extrabold font-['Plus_Jakarta_Sans'] leading-tight text-black mb-6">
                ARE YOU LOOKING FOR AN<br />
                <span className="font-black font-['Plus_Jakarta_Sans'] lg:text-[73px] leading-none text-[42px]">ECONOMICAL<br />
                BIKE?</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We have the most efficient yet durable and low fuel<br />
                consumption motorbikes- Boxer 100 and Boxer 125
              </p>
            </div>
            
            <div>
              <button className="border-2 border-black text-black px-12 py-4 rounded-full transition-all ease-in duration-300 hover:bg-[#0238A5] hover:text-white hover:border-[#0238A5]">
                REQUEST QUOTE
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={economicalBikesImage} 
              alt="Three Bajaj Boxer motorcycles in black, blue, and white colors parked together" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}