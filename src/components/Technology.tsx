import { ReactChild } from 'react';

export interface TechnologyProps {
  name: string;
  description: string;
  icon: ReactChild;
  color: string;
}

export default function Technology({ name, description, icon, color }: TechnologyProps) {
  return (
    <div className="h-32 md:h-22 lg:h-24 w-full flex items-center p-4 space-x-4 hover:bg-gray-300 hover:scale-[1.02] border border-gray-200 rounded-lg transition-all">
      <div
        className="h-[64px] w-[64px] flex flex-shrink-0 items-center justify-center text-white rounded-lg"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <h4 className="font-semibold text-gray-50">{name}</h4>
        <p className="text-sm text-gray-100">{description}</p>
      </div>
    </div>
  );
}
