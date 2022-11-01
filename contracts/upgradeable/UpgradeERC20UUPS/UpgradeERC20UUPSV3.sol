// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import {UpgradeERC20UUPSV2} from "./UpgradeERC20UUPSV2.sol";

contract UpgradeERC20UUPSV3 is UpgradeERC20UUPSV2 {
  /**
   * @dev Must call this just after the upgrade deployement, to update state
   * variables and execute other upgrade logic.
   * Ref: https://github.com/OpenZeppelin/openzeppelin-upgrades/issues/62
   */
  function upgradeToV3() public {
    require(version < 3, "UpgradeERC20UUPS: Already upgraded to version 3");
    version = 3;
    console.log("v", version);
  }
}
