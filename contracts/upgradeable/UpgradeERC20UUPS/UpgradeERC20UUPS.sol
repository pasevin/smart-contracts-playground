// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract UpgradeERC20UUPS is
  Initializable,
  ERC20Upgradeable,
  PausableUpgradeable,
  OwnableUpgradeable,
  UUPSUpgradeable
{
  uint256 public version;

  /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() {
    _disableInitializers();
    version = 1;
    console.log("v", version);
  }

  function initialize() public initializer {
    __ERC20_init("Upgrade ERC20 UUPS", "UE20U");
    __Pausable_init();
    __Ownable_init();
    __UUPSUpgradeable_init();
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override whenNotPaused {
    super._beforeTokenTransfer(from, to, amount);
  }

  function _authorizeUpgrade(address newImplementation)
    internal
    override
    onlyOwner
  {}
}
