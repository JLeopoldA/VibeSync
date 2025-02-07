// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SimpleERC721.sol";

contract ERC721Factory {
    // Array to store the addresses of deployed SimpleERC721 contracts.
    address[] public deployedContracts;

    event ContractDeployed(address indexed contractAddress);

    /// @notice Deploys a new SimpleERC721 contract with the provided parameters.
    /// @param name The name of the NFT collection.
    /// @param symbol The symbol of the NFT collection.
    /// @param genre The genre of the NFT collection.
    /// @param location The location associated with the NFT collection.
    function createERC721(
        string memory name, 
        string memory symbol, 
        string memory genre, 
        string memory location
    ) external {
        SimpleERC721 nftContract = new SimpleERC721(name, symbol, genre, location);
        deployedContracts.push(address(nftContract));
        emit ContractDeployed(address(nftContract));
    }

    /// @notice Returns the list of deployed ERC721 contract addresses.
    function getDeployedContracts() external view returns (address[] memory) {
        return deployedContracts;
    }
}

