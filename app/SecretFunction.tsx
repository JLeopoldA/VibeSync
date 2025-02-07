import { execSync } from "child_process";

export async function runForgeCommands(
  contractName: string,
  contractPath: string,
  rpcUrl: string,
  privateKey: string,
  chainId: number
) {
  try {
    console.log("Building project with Forge...");
    execSync("forge build", { stdio: "inherit" });

    console.log(`Deploying ${contractName}...`);
    const deployOutput = execSync(
      `forge create ${contractName} --rpc-url ${rpcUrl} --private-key ${privateKey}`,
      { encoding: "utf-8" }
    );
    console.log(deployOutput);

    const contractAddressMatch = deployOutput.match(/Deployed to: (0x[0-9a-fA-F]+)/);
    if (!contractAddressMatch) {
      throw new Error("Failed to extract contract address from deployment output");
    }
    const contractAddress = contractAddressMatch[1];
    console.log(`Contract deployed at: ${contractAddress}`);

    console.log("Verifying contract...");
    execSync(
      `forge verify-contract --chain-id ${chainId} --watch ${contractAddress} ${contractPath}:${contractName}`,
      { stdio: "inherit" }
    );

    console.log("Contract verification complete.");
  } catch (error) {
    console.error("Error executing Forge commands:", error);
  }
}

// Example usage
runForgeCommands(
  "YourNFTContract",
  "src/YourNFTContract.sol",
  "https://sepolia.base.org",
  "YOUR_PRIVATE_KEY",
  84532
);
