import React, { useState, useEffect } from 'react';
import { mysteryGroups } from './types/mysteries';
import { InitialPrayers, FinalPrayers } from './components/Prayers';
import { MysteryDisplay } from './components/MysteryDisplay';
import { Header } from './components/Header';
import { MysterySelector } from './components/MysterySelector';
import { DivineChaplet } from './components/DivineChaplet';
import { AngelusPrayers } from './components/AngelusPrayers';
import { ConsagracaoPrayer } from './components/ConsagracaoPrayer';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [fontSize, setFontSize] = useState(16);
  const [selectedMystery, setSelectedMystery] = useState(mysteryGroups[0].mysteries);
  const [prayerType, setPrayerType] = useState<'rosary' | 'mercy' | 'angelus' | 'consagracao'>('rosary');
  
  useEffect(() => {
    const today = new Date().getDay();
    const dayMap: { [key: string]: number } = {
      'Domingo': 0,
      'Segunda-feira': 1,
      'Terça-feira': 2,
      'Quarta-feira': 3,
      'Quinta-feira': 4,
      'Sexta-feira': 5,
      'Sábado': 6
    };
    
    const todayMystery = mysteryGroups.find(group => 
      group.days.some(day => dayMap[day] === today)
    );
    
    if (todayMystery) {
      setSelectedMystery(todayMystery.mysteries);
    }
  }, []);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));

  const handlePrayerTypeSelect = (value: string) => {
    if (value === 'Terço da Misericórdia') {
      setPrayerType('mercy');
    } else if (value === 'Ângelus') {
      setPrayerType('angelus');
    } else if (value === 'Consagração a Nossa Senhora') {
      setPrayerType('consagracao');
    } else {
      setPrayerType('rosary');
      const mystery = mysteryGroups.find(g => g.name === value);
      if (mystery) setSelectedMystery(mystery.mysteries);
    }
  };

  const renderPrayer = () => {
    switch (prayerType) {
      case 'mercy':
        return <DivineChaplet />;
      case 'angelus':
        return <AngelusPrayers />;
      case 'consagracao':
        return <ConsagracaoPrayer />;
      default:
        return (
          <>
            <InitialPrayers />
            <MysteryDisplay mystery={selectedMystery} />
            <FinalPrayers />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e5d6ac', fontSize: `${fontSize}px` }}>
      <Header 
        fontSize={fontSize}
        onIncrease={increaseFontSize}
        onDecrease={decreaseFontSize}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <MysterySelector
              mysteryGroups={mysteryGroups}
              selectedMystery={
                prayerType === 'rosary' 
                  ? selectedMystery.title 
                  : prayerType === 'mercy'
                    ? 'Terço da Misericórdia'
                    : prayerType === 'angelus'
                      ? 'Ângelus'
                      : 'Consagração a Nossa Senhora'
              }
              onSelect={handlePrayerTypeSelect}
              showAdditionalPrayers={true}
            />
            {renderPrayer()}
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;