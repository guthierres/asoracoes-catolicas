import React from 'react';
import { MysteryGroup } from '../types/mysteries';

interface MysterySelectorProps {
  mysteryGroups: MysteryGroup[];
  selectedMystery: string;
  onSelect: (value: string) => void;
  showAdditionalPrayers?: boolean;
}

export const MysterySelector: React.FC<MysterySelectorProps> = ({
  mysteryGroups,
  selectedMystery,
  onSelect,
  showAdditionalPrayers = false,
}) => {
  return (
    <div className="flex justify-center space-x-4">
      <select
        className="px-4 py-2 border rounded-md bg-[#eac948] text-[#503d2e] font-medium"
        onChange={(e) => onSelect(e.target.value)}
        value={selectedMystery}
      >
        {mysteryGroups.map(group => (
          <option key={group.name} value={group.name}>
            {group.name} ({group.days.join(' e ')})
          </option>
        ))}
        {showAdditionalPrayers && (
          <>
            <option value="Terço da Misericórdia">Terço da Misericórdia</option>
            <option value="Ângelus">Ângelus</option>
            <option value="Consagração a Nossa Senhora">Consagração à Nossa Senhora</option>
          </>
        )}
      </select>
    </div>
  );
};