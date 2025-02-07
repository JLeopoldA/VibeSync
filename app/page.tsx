'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Header from './Header';
import MainContent from './Main';
import SignedInPage from './Dashboard';

const App = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  const handleWalletConnect = () => {
    setIsWalletConnected(true);
    router.push('/signed-in'); // Navigate to signed-in page
  };

  const handleWalletDisconnect = () => {
    setIsWalletConnected(false);
    router.push('/'); // Navigate back to home
  };

  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <Header onConnect={handleWalletConnect} onDisconnect={handleWalletDisconnect} />

      {pathname === '/' && <MainContent isWalletConnected={isWalletConnected} />}
      {pathname === '/signed-in' && <SignedInPage />}
    </div>
  );
};

export default App;
