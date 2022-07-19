import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, network, run, upgrades } from "hardhat";
import { NomicLabsHardhatPluginError } from "hardhat/plugins";
import { requirementsGuard } from "./helpers/helpers";
import * as manifestGoerli from "../.openzeppelin/goerli.json";

async function main() {
  const signers = await ethers.getSigners();
  let deployer: SignerWithAddress | undefined;
  // Basic setup guards...
  [deployer] = requirementsGuard(signers, network);

  if (network.name === "goerli" || network.name === "mainnet") {
    const proxyAddr = manifestGoerli.proxies[0].address;
    const impl = await upgrades.erc1967.getImplementationAddress(proxyAddr);
    /* -------------------------------------------------------------------------- */
    /*                                VERIFICATION                                */
    /* -------------------------------------------------------------------------- */

    console.log(">>>>>>>>>>>> Verification >>>>>>>>>>>>");

    try {
      // Verify
      console.log("Verifying: ", impl);
      await run("verify:verify", {
        address: impl,
      });
    } catch (error) {
      if (
        error instanceof NomicLabsHardhatPluginError &&
        error.message.includes("Reason: Already Verified")
      ) {
        console.log("Already verified, skipping...");
      } else {
        console.error(error);
      }
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
