import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
// import * as manifestGoerli from "../.openzeppelin/goerli.json";

// async function main() {
//   const UpgradeERC20UUPSV2 = await ethers.getContractFactory(
//     "UpgradeERC20UUPSV2"
//   );
//   const proxyAddr = manifestGoerli.proxies[0].address;
//   const upgradeERC20UUPSV2 = await upgrades.prepareUpgrade(
//     proxyAddr,
//     UpgradeERC20UUPSV2
//   );
//   console.log("UpgradeERC20UUPSV2 upgrade prepared", upgradeERC20UUPSV2);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

task("_up:UpgradeERC20Transparent")
  .addParam(
    "proxyAddress",
    "Proxy Address of the contract to upgrade. Get it from the manifest."
  )
  .setAction(async function (taskArgs: TaskArguments, { ethers, upgrades }) {
    // Upgrading
    // const proxyAddr = manifestGoerli.proxies[0].address;
    const token = await ethers.getContractFactory("UpgradeERC20Transparent");
    const upgraded = await upgrades.prepareUpgrade(
      taskArgs.proxyAddress,
      token
    );
    console.log("UpgradeERC20Transparent upgrade prepared", upgraded);
  });

task("_up:UpgradeERC20UUPS")
  .addParam(
    "proxyAddress",
    "Proxy Address of the contract to upgrade. Get it from the manifest."
  )
  .setAction(async function (taskArgs: TaskArguments, { ethers, upgrades }) {
    // Upgrading
    // const proxyAddr = manifestGoerli.proxies[0].address;
    const token = await ethers.getContractFactory("UpgradeERC20UUPSV5");
    const upgraded = await upgrades.prepareUpgrade(
      taskArgs.proxyAddress,
      token
    );
    console.log("UpgradeERC20UUPS upgrade prepared", upgraded);
  });
