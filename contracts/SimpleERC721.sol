// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SimpleERC721 is ERC721 {
    uint256 public nextTokenId;
    string public genre;
    string public location;
    mapping(uint256 => string) private tokenData;

    /// @notice The constructor now accepts four parameters.
    /// @param _name The NFT collection's name.
    /// @param _symbol The NFT collection's symbol.
    /// @param _genre The genre of the NFT collection.
    /// @param _location The location associated with the NFT collection.
    constructor(
        string memory _name, 
        string memory _symbol,
        string memory _genre,
        string memory _location
    ) ERC721(_name, _symbol) {
        genre = _genre;
        location = _location;
    }

    /// @notice Mints a new token to the caller's address with an associated string.
    /// @dev Only the sender can mint for themselves and provide an additional string.
    /// @param _data A string input by the minter.
    function mint(string memory _data) external {
        _safeMint(msg.sender, nextTokenId);
        tokenData[nextTokenId] = _data;
        nextTokenId++;
    }

    /// @notice Retrieves the stored string data for a given token ID.
    /// @param tokenId The ID of the token.
    /// @return The string data associated with the token.
    function getTokenData(uint256 tokenId) external view returns (string memory) {
        require(ownerOf(tokenId) != address(0), "Token does not exist");
        return tokenData[tokenId];
    }
}
