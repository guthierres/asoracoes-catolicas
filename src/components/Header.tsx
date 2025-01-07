import React from 'react';
import { Cross, Type } from 'lucide-react';

interface HeaderProps {
  fontSize: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const Header: React.FC<HeaderProps> = ({ fontSize, onIncrease, onDecrease }) => {
  return (
    <header className="bg-[#503d2e] text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Cross className="h-8 w-8" />
          Orações Cotidianas
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={onDecrease}
            className="p-2 hover:opacity-80 rounded bg-[#eac948] text-[#503d2e]"
          >
            <Type className="h-5 w-5" />A-
          </button>
          <button
            onClick={onIncrease}
            className="p-2 hover:opacity-80 rounded bg-[#eac948] text-[#503d2e]"
          >
            <Type className="h-6 w-6" />A+
          </button>
        </div>
      </div>
    </header>
  );
};