interface FeatureCalloutProps {
  title: string;
  subtitle?: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

export function FeatureCallout({ title, subtitle, position }: FeatureCalloutProps) {
  return (
    <div 
      className="absolute z-10"
      style={position}
    >
      <div className="relative">
        <div className="w-16 h-16 border-2 border-yellow-400 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        </div>
        <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded whitespace-nowrap">
          <div className="text-yellow-400 font-bold text-sm">{title}</div>
          {subtitle && <div className="text-yellow-400 font-bold text-sm">{subtitle}</div>}
        </div>
        <div className="absolute left-16 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-black/80"></div>
      </div>
    </div>
  );
}