import { MapPin, Phone, Clock } from 'lucide-react';

export function Header() {
  return (
    <div className="bg-blue-600 text-white py-2 px-4">
      <div className="w-4/5 mx-auto flex justify-between items-center text-[9px] sm:text-xs xl:text-sm">
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-6">
          <div className="flex items-center gap-0.5 sm:gap-1 xl:gap-2">
            <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4" />
            <span className="hidden sm:inline">MON - FRI 8:00 - 17:00, SAT 9:00 - 16:00</span>
            <span className="sm:hidden">MON-SAT Open</span>
          </div>
          <div className="flex items-center gap-0.5 sm:gap-1 xl:gap-2">
            <MapPin className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4" />
            <span className="hidden xl:inline">Garissa Building pipeline along Outering Road near Bara shop</span>
            <span className="hidden md:inline xl:hidden">Garissa Building, Outering Road</span>
            <span className="md:hidden">Garissa Bldg</span>
          </div>
          <div className="flex items-center gap-0.5 sm:gap-1 xl:gap-2">
            <Phone className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4" />
            <span className="hidden sm:inline">0798 367 293 / 0020249101</span>
            <span className="sm:hidden">0798 367 293</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-2 xl:gap-4">
          <span>NEWSROOM</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}