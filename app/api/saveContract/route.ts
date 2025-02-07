import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

function generateERC721Contract(contractName: string, symbol: string): string {
    return `// SPDX-License-Identifier: MIT
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
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { contractName, symbol } = body;

        const contractCode = generateERC721Contract(contractName, symbol);

        // Save contract file inside the "contracts" folder
        const filePath = path.join(process.cwd(), "contracts", `${symbol}.sol`);
        fs.writeFileSync(filePath, contractCode);

        return NextResponse.json({ message: "Contract saved successfully", filePath });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
