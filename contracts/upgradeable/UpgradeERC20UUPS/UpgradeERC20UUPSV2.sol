// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import {UpgradeERC20UUPS} from "./UpgradeERC20UUPS.sol";

contract UpgradeERC20UUPSV2 is UpgradeERC20UUPS {
  /**
   * @dev Must call this just after the upgrade deployement, to update state
   * variables and execute other upgrade logic.
   * Ref: https://github.com/OpenZeppelin/openzeppelin-upgrades/issues/62
   */
  function upgradeToV2() public {
    require(version < 2, "DeHubStaking: Already upgraded to version 3");
    version = 2;
    console.log("v", version);
  }
}
