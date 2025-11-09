import image_e7645dd908d0b86619e4eddae2f1de9dbfc02f87 from 'figma:asset/e7645dd908d0b86619e4eddae2f1de9dbfc02f87.png';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Custom TikTok Icon
const TikTok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full">
      {/* Top Footer Section */}
      <div className="w-full bg-white py-12">
        <div className="w-[80%] mx-auto">
          {/* Top Divider Line */}
          <div className="w-full h-px bg-gray-300 mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <ImageWithFallback src={image_e7645dd908d0b86619e4eddae2f1de9dbfc02f87} alt="Endurance Miles" className="h-12 mb-4 object-contain" />
              <p className="text-gray-700" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Endurance Bikes and Spares Kenya is a trusted distributor of Boxer motorcycle and genuine spare parts, providing durable, high-performance solutions for riders and transport businesses across East Africa.
              </p>
            </div>

            {/* Products List */}
            <div>
              <h3 className="mb-4 uppercase pt-1" style={{ fontSize: '21px', letterSpacing: '0.5px', fontFamily: 'Anton, sans-serif' }}>
                Products List
              </h3>
              <ul className="space-y-2 text-gray-700" style={{ fontSize: '14px' }}>
                <li>Bajaj Discover 125</li>
                <li>Boxer 100KS</li>
                <li>Bajaj RE</li>
                <li>Bajaj Qute</li>
                <li>Boxer X150</li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="mb-4 uppercase pt-1" style={{ fontSize: '21px', letterSpacing: '0.5px', fontFamily: 'Anton, sans-serif' }}>
                About
              </h3>
              <ul className="space-y-2 text-gray-700" style={{ fontSize: '14px' }}>
                <li>Bajaj Discover 125</li>
                <li>Boxer 100KS</li>
                <li>Bajaj RE</li>
                <li>Bajaj Qute</li>
                <li>Boxer X150</li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="mb-4 uppercase pt-1" style={{ fontSize: '21px', letterSpacing: '0.5px', fontFamily: 'Anton, sans-serif' }}>
                Customer Service
              </h3>
              <ul className="space-y-2 text-gray-700" style={{ fontSize: '14px' }}>
                <li>Bajaj Discover 125</li>
                <li>Boxer 100KS</li>
                <li>Bajaj RE</li>
                <li>Bajaj Qute</li>
                <li>Boxer X150</li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="mb-4 uppercase pt-1" style={{ fontSize: '21px', letterSpacing: '0.5px', fontFamily: 'Anton, sans-serif' }}>
                Connect With Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-700 hover:text-[#0238A5] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-700 hover:text-[#0238A5] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-700 hover:text-[#0238A5] transition-colors">
                  <TikTok className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-700 hover:text-[#0238A5] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full bg-black py-8">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col gap-6">
            {/* First Row: Help Text and Contact Info */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <p className="text-white" style={{ fontSize: '14px' }}>
                  We are always here to help you
                </p>
                <p className="text-gray-400" style={{ fontSize: '12px' }}>
                  Reach to us through any of the support channels
                </p>
              </div>
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400" style={{ fontSize: '12px' }}>Hotline:</span>
                  <input 
                    type="text" 
                    readOnly
                    className="bg-transparent border-none text-white outline-none" 
                    style={{ fontSize: '12px', width: '120px' }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400" style={{ fontSize: '12px' }}>Email:</span>
                  <input 
                    type="text" 
                    readOnly
                    className="bg-transparent border-none text-white outline-none" 
                    style={{ fontSize: '12px', width: '120px' }}
                  />
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-700"></div>

            {/* Bottom Row: Copyright and Designer */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="text-gray-400" style={{ fontSize: '12px' }}>
                Copyright © 2025 Endurancemiles Limited. All rights reserved.
              </p>
              <p className="text-gray-400" style={{ fontSize: '12px' }}>
                Designed by 4dpixels
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
