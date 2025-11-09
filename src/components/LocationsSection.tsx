import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  address: string;
  salesPhone: string;
  salesHours: string;
  mapUrl: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Rongai',
    address: 'Embakasi pipeline along Outering road at bata stage. Near fredha total energies',
    salesPhone: '+254 768 367 293',
    salesHours: 'MON - FRI 8:00 - 17:00, SAT 8:00 - 14:00',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176449924543!2d36.7766!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTkuOSJTIDM2wrA0Nic1OS44IkU!5e0!3m2!1sen!2ske!4v1234567890'
  },
  {
    id: 2,
    name: 'Rongai',
    address: 'Magadi Road, Rongai Town Center, Next to Rongai Police Station',
    salesPhone: '+254 721 456 789',
    salesHours: 'MON - FRI 8:00 - 18:00, SAT 8:00 - 15:00',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.7!3d-1.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTkuOSJTIDM2wrA0Nic1OS44IkU!5e0!3m2!1sen!2ske!4v1234567891'
  },
  {
    id: 3,
    name: 'Rongai',
    address: 'Karen Road, Opposite Rongai Market, Near Total Petrol Station',
    salesPhone: '+254 733 987 654',
    salesHours: 'MON - FRI 9:00 - 17:00, SAT 9:00 - 14:00',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9!2d36.75!3d-1.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTkuOSJTIDM2wrA0Nic1OS44IkU!5e0!3m2!1sen!2ske!4v1234567892'
  },
  {
    id: 4,
    name: 'Rongai',
    address: 'Kware Main Road, Beside Rongai Shopping Complex',
    salesPhone: '+254 745 321 098',
    salesHours: 'MON - SAT 8:00 - 17:00, SUN: Closed',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.85!2d36.78!3d-1.285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTkuOSJTIDM2wrA0Nic1OS44IkU!5e0!3m2!1sen!2ske!4v1234567893'
  }
];

export function LocationsSection() {
  const [activeLocationId, setActiveLocationId] = useState<number>(1);

  const toggleLocation = (id: number) => {
    setActiveLocationId(activeLocationId === id ? 0 : id);
  };

  const activeLocation = locations.find(loc => loc.id === activeLocationId);

  return (
    <div className="w-full bg-[#040E24] pt-16 pb-24 mt-16">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Locations List */}
          <div className="space-y-0">
            {locations.map((location) => {
              const isActive = activeLocationId === location.id;
              
              return (
                <div key={location.id} className="border-b border-gray-700">
                  {/* Location Header */}
                  <button
                    onClick={() => toggleLocation(location.id)}
                    className="w-full flex items-center justify-between py-6 text-left hover:bg-white/5 transition-colors px-4"
                  >
                    <span className="text-white" style={{ fontSize: '20px' }}>
                      {location.name}
                    </span>
                    {isActive ? (
                      <Minus className="w-6 h-6 text-white flex-shrink-0" />
                    ) : (
                      <Plus className="w-6 h-6 text-white flex-shrink-0" />
                    )}
                  </button>
                  
                  {/* Location Details */}
                  {isActive && (
                    <div className="px-4 pb-6 space-y-4 text-gray-300">
                      <div>
                        <div className="mb-1" style={{ fontSize: '14px' }}>Address:</div>
                        <div style={{ fontSize: '16px' }}>{location.address}</div>
                      </div>
                      <div>
                        <div className="mb-1" style={{ fontSize: '14px' }}>Sales Phone:</div>
                        <div style={{ fontSize: '16px' }}>{location.salesPhone}</div>
                      </div>
                      <div>
                        <div className="mb-1" style={{ fontSize: '14px' }}>Sales Hours:</div>
                        <div style={{ fontSize: '16px' }}>{location.salesHours}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            {activeLocation ? (
              <iframe
                src={activeLocation.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${activeLocation.name}`}
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <p className="text-gray-400">Select a location to view map</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
