import heroBannerImage from 'figma:asset/d9a52e9ac26262a32a0f30c26f98074bfce962aa.png';
import boxerLogo from 'figma:asset/84be65fcd043f88752a4b8d938224801d166375d.png';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LocationsSection } from './LocationsSection';

export function ContactUs() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div 
        className="relative w-full min-h-[320px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBannerImage})` }}
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
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full py-16" style={{ background: 'linear-gradient(to bottom, #F3F3F3 50%, white 50%)' }}>
        <div className="w-[80%] mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="flex flex-col">
              <h2 className="mb-8 uppercase" style={{ fontFamily: 'Anton, sans-serif', fontSize: '40px', letterSpacing: '0.5px' }}>
                GET IN TOUCH WITH US
              </h2>
              <form className="flex flex-col flex-1 space-y-6">
                {/* First Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    type="text" 
                    placeholder="First name" 
                    className="w-full bg-gray-100 border-gray-200 h-14"
                  />
                  <Input 
                    type="email" 
                    placeholder="Enter Email Address" 
                    className="w-full bg-gray-100 border-gray-200 h-14"
                  />
                </div>
                
                {/* Phone Number */}
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Enter Phone Number" 
                    className="w-full bg-gray-100 border-gray-200 h-14"
                  />
                </div>
                
                {/* City and State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    type="text" 
                    placeholder="Enter City Name" 
                    className="w-full bg-gray-100 border-gray-200 h-14"
                  />
                  <Input 
                    type="text" 
                    placeholder="Enter State name" 
                    className="w-full bg-gray-100 border-gray-200 h-14"
                  />
                </div>
                
                {/* Message */}
                <div className="flex-1 flex flex-col">
                  <Textarea 
                    placeholder="Enter Message" 
                    className="w-full flex-1 min-h-[180px] bg-gray-100 border-gray-200 resize-none"
                  />
                </div>
                
                {/* Submit Button */}
                <div>
                  <div 
                    className="px-10 py-4 bg-white hover:bg-[#0238A5] rounded-[100px] outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-center items-center gap-2.5 cursor-pointer group w-full lg:w-1/2 lg:ml-auto"
                    style={{
                      transition: 'background-color 599ms ease-out'
                    }}
                  >
                    <div 
                      className="justify-start text-black group-hover:text-white font-extrabold font-['Plus_Jakarta_Sans'] leading-tight uppercase"
                      style={{
                        transition: 'color 599ms ease-out',
                        fontSize: '16px',
                        letterSpacing: '0.5px'
                      }}
                    >
                      SEND MESSAGE
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Info Card */}
            <div className="bg-[#0a1929] text-white rounded-2xl p-8 lg:p-10 flex flex-col">
              <div className="mb-8">
                <img src={boxerLogo} alt="Boxer" className="h-16 object-contain" />
              </div>
              
              <h2 className="mb-6 uppercase" style={{ fontFamily: 'Anton, sans-serif', fontSize: '48px', lineHeight: '1.1' }}>
                HI! WE ARE ALWAYS HERE TO HELP YOU
              </h2>
              
              <p className="mb-10 text-gray-300" style={{ fontSize: '17px' }}>
                Our Technical Team & mechanics are readily available to offer you the best or maintenance and repair support any day.
              </p>
              
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-[#0238A5] rounded-full p-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white" style={{ fontSize: '17px' }}>
                      0754 XXX XXX / 0721 XXX XXX
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-[#0238A5] rounded-full p-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white" style={{ fontSize: '17px' }}>
                      0754 XXX XXX/ 0721 XXX XXX
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-[#0238A5] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path strokeWidth="2" d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white" style={{ fontSize: '17px' }}>
                      Mon - Fri: 08:00AM - 05:00PM Saturday :<br />
                      09:00AM - 02:00PM Sunday : Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Locations Section */}
      <LocationsSection />
    </div>
  );
}
