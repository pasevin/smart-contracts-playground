import { task } from "hardhat/config";
import { NomicLabsHardhatPluginError } from "hardhat/plugins";
import { TaskArguments } from "hardhat/types";

task("_verify:UpgradeERC20Transparent")
  .addParam(
    "proxyAddress",
    "Proxy Address of the contract to verify. Get it from the manifest."
  )
  .setAction(async function (taskArgs: TaskArguments, { upgrades, run }) {
    // const proxyAddr = manifestGoerli.proxies[0].address;
    const impl = await upgrades.erc1967.getImplementationAddress(
      taskArgs.proxyAddress
    );
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
  });

task("_verify:UpgradeERC20UUPS")
  .addParam(
    "proxyAddress",
    "Proxy Address of the contract to verify. Get it from the manifest."
  )
  .setAction(async function (taskArgs: TaskArguments, { upgrades, run }) {
    // const proxyAddr = manifestGoerli.proxies[0].address;
    const impl = await upgrades.erc1967.getImplementationAddress(
      taskArgs.proxyAddress
    );
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
  });

task("_verify:any")
  .addParam(
    "address",
    "Address of the contract to verify. Get it from the manifest."
  )
  .setAction(async function (taskArgs: TaskArguments, { upgrades, run }) {
    console.log(">>>>>>>>>>>> Verification >>>>>>>>>>>>");
    try {
      // Verify
      console.log("Verifying: ", taskArgs.address);
      await run("verify:verify", {
        address: taskArgs.address,
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
  });
