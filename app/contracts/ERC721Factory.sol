// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC721Factory {
    event CollectionCreated(address indexed collectionAddress, address indexed owner, string name, string symbol, string genre, string showTitle, string location, string date, string startTime, string djName);
    
    address[] public collections;

    function createCollection(string memory name, string memory symbol, string memory genre, string memory showTitle, string memory location, string memory date, string memory startTime, string memory djName) external {
        NFTCollection newCollection = new NFTCollection(name, symbol, genre, showTitle, location, date, startTime, djName, msg.sender);
        collections.push(address(newCollection));
        emit CollectionCreated(address(newCollection), msg.sender, name, symbol, genre, showTitle, location, date, startTime, djName);
    }

    function getCollections() external view returns (address[] memory) {
        return collections;
    }
}

contract NFTCollection is ERC721, Ownable {
    uint256 public nextTokenId;
    string public genre;
    string public showTitle;
    string public location;
    string public date;
    string public startTime;
    string public djName;
    mapping(uint256 => string) private tokenData;

    event Minted(address indexed minter, uint256 indexed tokenId, string data);

    constructor(string memory name, string memory symbol, string memory _genre, string memory _showTitle, string memory _location, string memory _date, string memory _startTime, string memory _djName, address owner)
        ERC721(name, symbol)
        Ownable(owner)
    {
        genre = _genre;
        showTitle = _showTitle;
        location = _location;
        date = _date;
        startTime = _startTime;
        djName = _djName;
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
