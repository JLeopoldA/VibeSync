// components/Header.tsx
import React from 'react';
import { Wallet, ConnectWallet, WalletDropdown, WalletDropdownLink, WalletDropdownDisconnect } from '@coinbase/onchainkit/wallet';
import { Avatar, Name } from '@coinbase/onchainkit/identity';

const Header = ({ onConnect, onDisconnect }: any) => {
  return (
    <header className="pt-4 pr-4 flex justify-between items-center">
      <div>
        {/* Other header content */}
      </div>

      <div className="wallet-container">
        <Wallet>
          <ConnectWallet onConnect={onConnect}>
            <Avatar className="h-6 w-6" />
            <Name />
          </ConnectWallet>
          <WalletDropdown>
            <WalletDropdownLink
              icon="wallet"
              href="https://keys.coinbase.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wallet
            </WalletDropdownLink>
            <WalletDropdownDisconnect />
          </WalletDropdown>
        </Wallet>
      </div>
    </header>
  );
};

export default Header;
