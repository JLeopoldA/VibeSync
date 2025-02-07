'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from './Header';
import MainContent from './pages/Main';
import SignedInPage from './pages/Dashboard';

const App = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const router = useRouter();

  const handleWalletConnect = () => {
    setIsWalletConnected(true);
  };

  const handleWalletDisconnect = () => {
    setIsWalletConnected(false);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <Header onConnect={handleWalletConnect} onDisconnect={handleWalletDisconnect} />
      
      {isWalletConnected ? (
        // Show MainContent when wallet is connected
        <MainContent isWalletConnected={isWalletConnected} />
      ) : (
        // Show SignedInPage when wallet is not connected
        <SignedInPage />
      )}
    </div>
  );
};

export default App;
