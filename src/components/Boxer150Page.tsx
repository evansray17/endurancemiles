import image_f6636915f7b085cdfb86adbcea3e3b16cfe7e543 from 'figma:asset/f6636915f7b085cdfb86adbcea3e3b16cfe7e543.png';
import image_028c65435dc3094bf489861e4566c869e801ef65 from 'figma:asset/028c65435dc3094bf489861e4566c869e801ef65.png';
import image_113d0c7da2d3c22e3276e19da2f09ede839ec684 from 'figma:asset/113d0c7da2d3c22e3276e19da2f09ede839ec684.png';
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Boxer150Banner } from "./Boxer150Banner";
import { Footer } from "./Footer";
import { Gauge, Droplet, Zap, MapPin, Phone } from "lucide-react";
import boxerLogoWhite from '../assets/boxer_logo.png';
import boxer150Image from 'figma:asset/113d0c7da2d3c22e3276e19da2f09ede839ec684.png';
import boxerPromoImage from 'figma:asset/d2dcbd77d63632950bbf5dfd83cbdf45f720733e.png';
import performanceImage from 'figma:asset/84d5ee23977c9a0995e685a26a78fd344e012b6a.png';
import designImage from 'figma:asset/c8789c700608a0bf32960123492f278965cd7f2d.png';
import safetyImage from 'figma:asset/37297f526b02ee2a64d9b9d919b3b270b53275a0.png';
import technicalImage from 'figma:asset/37297f526b02ee2a64d9b9d919b3b270b53275a0.png';

interface Boxer150PageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Boxer150Page({ onNavigate, currentPage }: Boxer150PageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />
      <Boxer150Banner />
      
      {/* Boxer X 150 Content Section */}
      <section className="w-[80%] mx-auto py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 font-[Anton] text-[32px]">BOXER 150</h2>
            <p className="text-gray-700 mb-4">
              Take on any road with the Boxer X150 — the bike made for endurance, strength, and everyday adventure. Equipped with a 4–Stroke Air-Cooled Engine, Electric Start, and Heavy-Duty Suspension, it delivers exceptional comfort, control, and performance on long and demanding rides.
            </p>
            <p className="text-gray-700 mb-8">
              The Boxer X150 combines power, durability, and fuel efficiency — perfect for work or daily rides. A true workhorse built for Africa.
            </p>

            {/* Specifications */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="w-6 h-6 text-gray-600" />
                  <p className="text-gray-600 text-sm">MILEAGE</p>
                </div>
                <p className="font-semibold">14-20MI</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-2">
                  <Droplet className="w-6 h-6 text-gray-600" />
                  <p className="text-gray-600 text-sm">FUEL TYPE</p>
                </div>
                <p className="font-semibold">Petrol</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-6 h-6 text-gray-600" />
                  <p className="text-gray-600 text-sm">ENGINE</p>
                </div>
                <p className="font-semibold">50-60 km/l</p>
              </div>
            </div>

            {/* Request Quote Button */}
            <div>
              <div 
                className="px-10 py-4 bg-[#0238A5] hover:bg-[#001f7d] rounded-[100px] inline-flex justify-center items-center gap-2.5 cursor-pointer group w-fit"
                style={{
                  transition: 'background-color 599ms ease-out'
                }}
              >
                <div 
                  className="justify-start text-white font-extrabold font-['Plus_Jakarta_Sans'] leading-tight"
                >
                  REQUEST QUOTE
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-end">
            <img 
              src={image_113d0c7da2d3c22e3276e19da2f09ede839ec684} 
              alt="Boxer 150 Motorcycle" 
              className="w-full max-w-[600px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Second Section - Features Grid */}
      <section className="w-[80%] mx-auto py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Performance Card */}
          <div>
            <img 
              src={performanceImage} 
              alt="Performance Features" 
              className="w-full h-auto mb-4"
            />
            <h3 className="mb-2">Performance</h3>
            <p className="text-gray-700">4-Stroke Natural Air-cooled Engine</p>
          </div>

          {/* Design Card */}
          <div>
            <img 
              src={designImage} 
              alt="Design Features" 
              className="w-full h-auto mb-4"
            />
            <h3 className="mb-2">Design</h3>
            <p className="text-gray-700">New design and Styling</p>
          </div>

          {/* Safety Card */}
          <div>
            <img 
              src={image_028c65435dc3094bf489861e4566c869e801ef65} 
              alt="Safety Features" 
              className="w-full h-auto mb-4"
            />
            <h3 className="mb-2">Safety</h3>
            <p className="text-gray-700">Anti-Skid braking</p>
          </div>

          {/* Technical Card */}
          <div>
            <img 
              src={image_f6636915f7b085cdfb86adbcea3e3b16cfe7e543} 
              alt="Technical Features" 
              className="w-full h-auto mb-4"
            />
            <h3 className="mb-2">Technical</h3>
            <p className="text-gray-700">Alloy Wheels</p>
          </div>
        </div>
      </section>

      {/* Third Section - Hours & Contact */}
      <section className="w-[80%] mx-auto py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hours of Operation Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#0238A5] text-white p-6">
              <h3 className="text-white">Hours of Operation</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">SUNDAY</span>
                <span className="text-gray-700">CLOSED</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">MONDAY</span>
                <span className="text-gray-700">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">TUESDAY</span>
                <span className="text-gray-700">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">WEDNESDAY</span>
                <span className="text-gray-700">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">THURSDAY</span>
                <span className="text-gray-700">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">FRIDAY</span>
                <span className="text-gray-700">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">SATURDAY</span>
                <span className="text-gray-700">9:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Have Questions Card */}
          <div className="bg-[#0A1628] text-white rounded-lg p-8 flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              <img 
                src={boxerLogoWhite} 
                alt="Boxer Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <h2 className="text-white text-center mb-4">Have Questions? Call Today!</h2>
            <p className="text-gray-300 text-center mb-8">
              Our Technical Team & mechanics are readily available to offer you the best of maintenance and repair support any day.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-[#1a2842] p-4 rounded-lg">
                <div className="bg-[#0238A5] p-3 rounded-[30px]">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-300">0754 XXX XXX/ 0721 XXX XXX</span>
              </div>
              <div className="flex items-center gap-4 bg-[#1a2842] p-4 rounded-lg">
                <div className="bg-[#0238A5] p-3 rounded-[30px]">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-300">0754 XXX XXX/ 0721 XXX XXX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
