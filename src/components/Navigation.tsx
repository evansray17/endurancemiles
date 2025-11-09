import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import enduranceLogo from 'figma:asset/e7645dd908d0b86619e4eddae2f1de9dbfc02f87.png';

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navigation({ onNavigate, currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    'Home',
    'About Us', 
    'Motorcycle',
    'Spare parts',
    'Service Center',
    'Accessories',
    'Boda Loan',
    'Contact Us'
  ];

  const handleMenuClick = (item: string) => {
    onNavigate(item);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm py-2 px-4 sticky top-0 z-50">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        {/* Logo - Clickable to go home */}
        <div className="flex items-center cursor-pointer" onClick={() => onNavigate('Home')}>
          <img 
            src={enduranceLogo} 
            alt="Endurance Miles Limited" 
            className="h-12 w-auto sm:h-14 md:h-16 m-[0px] p-[0px]"
          />
        </div>
        
        {/* Desktop Menu - Only shows on screens 1536px and above (2xl breakpoint) */}
        <div className="hidden 2xl:flex gap-6 xl:gap-8">
          {menuItems.map((item, index) => (
            <button 
              key={index}
              onClick={() => handleMenuClick(item)}
              className={`${
                currentPage === item 
                  ? 'text-[#0238A5]' 
                  : 'text-gray-700 hover:text-blue-600'
              } transition-colors text-sm xl:text-base whitespace-nowrap`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button - Shows on screens below 1536px (below 2xl breakpoint) */}
        <button
          className="2xl:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Shows on screens below 1536px (below 2xl breakpoint) */}
      {isMenuOpen && (
        <div className="2xl:hidden bg-white border-t shadow-lg">
          <div className="w-4/5 mx-auto py-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => handleMenuClick(item)}
                  className={`${
                    currentPage === item 
                      ? 'text-[#0238A5] bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  } transition-colors text-left py-2 px-4 rounded`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}