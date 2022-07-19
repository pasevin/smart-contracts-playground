import { ethers, upgrades } from "hardhat";
import * as manifestGoerli from "../.openzeppelin/goerli.json";

async function main() {
  const UpgradeERC20UUPSV2 = await ethers.getContractFactory(
    "UpgradeERC20UUPSV2"
  );
  const proxyAddr = manifestGoerli.proxies[0].address;
  const upgradeERC20UUPSV2 = await upgrades.prepareUpgrade(
    proxyAddr,
    UpgradeERC20UUPSV2
  );
  console.log("UpgradeERC20UUPSV2 upgrade prepared", upgradeERC20UUPSV2);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
