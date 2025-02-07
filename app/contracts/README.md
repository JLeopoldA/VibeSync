Solidity smart contracts for NFT 

Steps

``` bash
forge build
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY ERC721Factory --broadcast
# address 0x33cA2Be8548928C08C22D781C6f3E67FE5eBB66d

cast send --rpc-url $RPC_URL --private-key $PRIVATE_KEY 0x33cA2Be8548928C08C22D781C6f3E67FE5eBB66d \
    "createCollection(string,string,string,string,string,string,string,string)" \
    "MyCollection" "MCOL" "Electronic" "Summer Festival" "Los Angeles" "2024-09-15" "18:00" "DJ Alex"

# 0x19b3dbea5e27994a66c4fde175463e094e90d0cd

cast send --rpc-url $RPC_URL --private-key $PRIVATE_KEY 0x19b3dbea5e27994a66c4fde175463e094e90d0cd "mint(string)" "Woah my vibe is on-chain"


```
