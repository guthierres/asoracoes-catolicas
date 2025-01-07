import React from 'react';

export const Footer: React.FC = () => {
  const handleDonation = () => {
    navigator.clipboard.writeText('guthierresc@hotmail.com');
    alert('Chave PIX copiada com sucesso!');
  };

  return (
    <footer className="mt-8 text-center text-[9px] text-[#503d2e] opacity-75">
      <p className="mb-2">
        Desenvolvido por:{' '}
        <a
          href="https://instagram.com/guthierresc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Sem.Guthierres
        </a>{' '}
        - Diocese de São Miguel Paulista SP - 2025
      </p>
      <button
        onClick={handleDonation}
        className="px-3 py-1 bg-[#eac948] text-[#503d2e] rounded-md hover:opacity-90 transition-opacity"
      >
        Fazer Oferta
      </button>
    </footer>
  );
};