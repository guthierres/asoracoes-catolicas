import React from 'react';
import { angelusPrayers, angelusFinalPrayer, reginaCoeli, reginaCoeliPrayer, gloryPrayer } from '../types/prayers';

export const AngelusPrayers: React.FC = () => {
  const isEasterSeason = false; // TODO: Add Easter season detection logic

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>
        {isEasterSeason ? 'Regina Coeli' : 'Ângelus'}
      </h2>
      
      {isEasterSeason ? (
        <p className="text-center italic">(Reza-se apenas no tempo pascal)</p>
      ) : (
        <p className="text-center italic">(No tempo pascal reza-se o Regina Coeli no lugar do Ângelus)</p>
      )}

      <div className="space-y-4">
        {(isEasterSeason ? reginaCoeli : angelusPrayers).map((prayer, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
            {prayer.verse && (
              <p className="font-semibold" style={{ color: '#503d2e' }}>
                V. {prayer.verse}
              </p>
            )}
            {prayer.response && (
              <p className="mt-1">
                R. {prayer.response}
              </p>
            )}
            {prayer.prayer && (
              <p className="mt-2 italic">{prayer.prayer}</p>
            )}
          </div>
        ))}

        <div className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
          <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>
            Oração
          </h3>
          <p>{isEasterSeason ? reginaCoeliPrayer : angelusFinalPrayer}</p>
        </div>

        {isEasterSeason && (
          <div className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
            <p>{gloryPrayer.prayer}</p>
            <p className="mt-2 text-sm text-gray-600">(Repetir {gloryPrayer.repeat} vezes)</p>
          </div>
        )}
      </div>
    </div>
  );
};