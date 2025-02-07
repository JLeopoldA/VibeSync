// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC721Factory {
    event CollectionCreated(address indexed collectionAddress, address indexed owner, string name, string symbol, string genre);
    
    address[] public collections;

    function createCollection(string memory name, string memory symbol, string memory genre) external {
        NFTCollection newCollection = new NFTCollection(name, symbol, genre, msg.sender);
        collections.push(address(newCollection));
        emit CollectionCreated(address(newCollection), msg.sender, name, symbol, genre);
    }

    function getCollections() external view returns (address[] memory) {
        return collections;
    }
}

contract NFTCollection is ERC721, Ownable {
    uint256 public nextTokenId;
    string public genre;
    mapping(uint256 => string) private tokenData;

    event Minted(address indexed minter, uint256 indexed tokenId, string data);

    constructor(string memory name, string memory symbol, string memory _genre, address owner)
        ERC721(name, symbol)
        Ownable(owner)
    {
        genre = _genre;
    }

    function mint(string memory data) external {
        _safeMint(msg.sender, nextTokenId);
        tokenData[nextTokenId] = data;
        emit Minted(msg.sender, nextTokenId, data);
        nextTokenId++;
    }

    function getTokenData(uint256 tokenId) external view returns (string memory) {
        require(ownerOf(tokenId) != address(0), "Token does not exist");
        return tokenData[tokenId];
    }
}

