'use client';  

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainContent from './Main';
import SignedInPage from './Dashboard';

const App = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletConnect = () => {
    setIsWalletConnected(true);
  };

  const handleWalletDisconnect = () => {
    setIsWalletConnected(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
        <Header onConnect={handleWalletConnect} onDisconnect={handleWalletDisconnect} />
        <Routes>
          <Route path="/" element={<MainContent isWalletConnected={isWalletConnected} />} />
          <Route path="/signed-in" element={<SignedInPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
