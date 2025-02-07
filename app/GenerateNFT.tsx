"use server";
import { useEffect } from 'react';
import { runForgeCommands } from './SecretFunction';

function generateERC721Contract(contractName: string, symbol: string): string {
    let contractCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ${contractName} is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;

    event Minted(
        address indexed minter,
        uint256 indexed tokenId,
        string tokenURI
    );

    constructor() ERC721("${contractName}", "${symbol}") {
        _tokenIdCounter = 0;
    }

    function mintNFT(address to, string memory tokenURI) external onlyOwner {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter += 1;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);

        emit Minted(to, tokenId, tokenURI);
    }
}`;
    
    return contractCode;
}

export async function saveContractToFile(
    genre: string,
    theme: string,
    showTitle: string,
    location: string,
    dateTime: string,
    setDuration: string,
    ticketCost: string,
    djName: string,
    djDescription: string,
    djLinks: string,
    mintWindowLength: string
) {
    let contractName = `${showTitle}: ${djName} in ${location}`; 
    let symbol = `${djName}_${dateTime}`;
    const contractCode = generateERC721Contract(contractName, symbol);
    useEffect(() => {
        import("fs").then((fs) => {
            fs.writeFileSync(`${symbol}.sol`, contractCode);
        });
    }, []);
    //await runForgeCommands(contractName, )
}

// Example usage:
//saveContractToFile("SuperMon", "SMON", "./SuperMon.sol");
