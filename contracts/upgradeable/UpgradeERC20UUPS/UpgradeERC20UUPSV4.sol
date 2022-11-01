// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import {UpgradeERC20UUPSV3} from "./UpgradeERC20UUPSV3.sol";

contract UpgradeERC20UUPSV4 is UpgradeERC20UUPSV3 {
  /**
   * @dev Must call this just after the upgrade deployement, to update state
   * variables and execute other upgrade logic.
   * Ref: https://github.com/OpenZeppelin/openzeppelin-upgrades/issues/62
   */
  function upgradeToV4() public {
    require(version < 4, "UpgradeERC20UUPS: Already upgraded to version 4");
    version = 4;
    console.log("v", version);
  }
}
