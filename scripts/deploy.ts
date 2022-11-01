import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

task("_deploy:UpgradeERC20Transparent").setAction(async function (
  _taskArgs: TaskArguments,
  { ethers, upgrades }
) {
  // Deploying
  const token = await ethers.getContractFactory("UpgradeERC20Transparent");
  const instance = await upgrades.deployProxy(token);
  await instance.deployed();
  console.log("UpgradeERC20Transparent deployed to: ", instance.address);
});

task("_deploy:UpgradeERC20UUPS").setAction(async function (
  _taskArgs: TaskArguments,
  { ethers, upgrades }
) {
  // Deploying
  const token = await ethers.getContractFactory("UpgradeERC20UUPS");
  const instance = await upgrades.deployProxy(token);
  await instance.deployed();
  console.log("UpgradeERC20Transparent deployed to: ", instance.address);
});
