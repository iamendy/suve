// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import { AxelarExecutable } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol";
import { IAxelarGateway } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import { IAxelarGasService } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";
import { IERC20 } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol";

contract Verify is AxelarExecutable {
  IAxelarGasService public immutable gasService;
  string vaccineEnrollmentService;
  string VESChain;

  struct Vaccine {
    bytes32 hash;
    string name;
    string description;
    string imageLink;
    uint registeredAt;
    uint expiresAt;
  }

  mapping(address => mapping(bytes32 => Vaccine)) vaccines;

  event VerificationReceived(
    bytes32 indexed hash,
    string indexed name,
    string description,
    string imageLink,
    uint registeredAt,
    uint expiresAt,
    address indexed checker
  );

  constructor(
    address gateway_,
    address gasReceiver_,
    string memory _vaccineEnrollmentService,
    string memory _VESChain
  ) AxelarExecutable(gateway_) {
    gasService = IAxelarGasService(gasReceiver_);
    vaccineEnrollmentService = _vaccineEnrollmentService;
    VESChain = _VESChain;
  }

  //a user who has verified before, does not need to re-verify
  function getVaccines(
    address checker,
    bytes32 hash
  ) external view returns (Vaccine memory) {
    return vaccines[checker][hash];
  }

  // Verify a vaccine
  function verify(bytes32 _hash) external payable {
    require(msg.value > 0, "You need to pay gas");
    //records the checker
    bytes memory payload = abi.encode(_hash, msg.sender);

    gasService.payNativeGasForContractCall{ value: msg.value }(
      address(this),
      VESChain,
      vaccineEnrollmentService,
      payload,
      msg.sender
    );

    gateway.callContract(VESChain, vaccineEnrollmentService, payload);
  }

  // Handles GMP response
  function _execute(
    string calldata,
    string calldata,
    bytes calldata payload_
  ) internal override {
    (Vaccine memory vaccine, address checker) = abi.decode(
      payload_,
      (Vaccine, address)
    );
    //save to checker's blockchain for subsequent access
    vaccines[checker][vaccine.hash] = vaccine;
    //emit an event
    emit VerificationReceived(
      vaccine.hash,
      vaccine.name,
      vaccine.description,
      vaccine.imageLink,
      vaccine.registeredAt,
      vaccine.expiresAt,
      checker
    );
  }
}

//ftm gateway 0x97837985Ec0494E7b9C71f5D3f9250188477ae14
//ftm gas service 0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6
//ftm 0x8C704f8e7311Fa56Fb573E39FCb32EcE28ee4FD2

//hash 0 0x1152bb5962c05d5fd9b73d1f24f8e1af5560fd713473ff016158877254cf326c
//hash 1 0x046c052e3841c5df03b4a5c1613ce37a213d84c397ae95ad672aaf35c4318310
