import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Network } from "hardhat/types";

export const requirementsGuard = (
  signers: SignerWithAddress[],
  network: Network
) => {
  console.log("Checking if requirements are met...\n");
  let deployer: SignerWithAddress | undefined;
  // Basic setup guards...
  signers.forEach((s) => {
    if (s.address === process.env.DEPLOYER) {
      deployer = s;
    }
  });
  if (!deployer) {
    throw new Error(`'env' address(es) not found in signers!`);
  }
  return [deployer!];
};
