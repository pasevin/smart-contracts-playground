// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "./UpgradeERC20Transparent.sol";

contract UpgradeERC20TransparentV2 is UpgradeERC20Transparent {
  uint256 public version;

  function upgradeToV2() public {
    require(version < 2, "Already upgraded to version 2");
    version = 2;
    console.log("v", version);
  }
}
