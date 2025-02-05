// components/MainContent.tsx
import React from 'react';

const MainContent = ({ isWalletConnected }: any) => {
  return (
    <main className="flex-grow flex items-center justify-center">
      <div className="max-w-4xl w-full p-4">
        {isWalletConnected ? (
          <>
            <div className="w-1/3 mx-auto mb-6">
              {/* Your content when wallet is connected */}
            </div>
            <div className="flex justify-center mb-6">
              <span className="dark:text-white text-black text-6xl font-bold">DJ SET NFT - Connected</span>
            </div>
            <p className="text-center mb-6">
              Welcome to the exclusive DJ Set NFT page! You are now connected.
            </p>
            {/* Additional content for signed-in users */}
          </>
        ) : (
          <>
            <div className="w-1/3 mx-auto mb-6">
              {/* Your default content when wallet is not connected */}
            </div>
            <div className="flex justify-center mb-6">
              <span className="dark:text-white text-black text-6xl font-bold">DJ SET NFT</span>
            </div>
            <p className="text-center mb-6">
              Sign In or Sign Up by connecting Wallet below.
            </p>
            {/* Additional content for non-signed-in users */}
          </>
        )}
      </div>
    </main>
  );
};

export default MainContent;
