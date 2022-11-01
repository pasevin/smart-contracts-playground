// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import {UpgradeERC20UUPSV4} from "./UpgradeERC20UUPSV4.sol";

contract UpgradeERC20UUPSV5 is UpgradeERC20UUPSV4 {
  /**
   * @dev Must call this just after the upgrade deployement, to update state
   * variables and execute other upgrade logic.
   * Ref: https://github.com/OpenZeppelin/openzeppelin-upgrades/issues/62
   */
  function upgradeToV5() public {
    require(version < 5, "UpgradeERC20UUPS: Already upgraded to version 5");
    version = 5;
    console.log("v", version);
  }
}
