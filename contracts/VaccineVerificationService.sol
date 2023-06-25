// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import { AxelarExecutable } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol";
import { IAxelarGateway } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import { IAxelarGasService } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";
import { IERC20 } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol";

contract VaccineVerificationService is AxelarExecutable {
  IAxelarGasService public immutable gasService;
  string public vaccineEnrollmentService;
  string public VESChain;

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

  //a user who has verified a hash before, does not need to re-verify
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
//ftm verification 0xe5Eee9643fE4d3fD9c5cAC29Ef5f96b8885FE6aB

//celo gateway 0xe432150cce91c13a887f7D836923d5597adD8E31
//celo gas service 0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6
//celo verification 0x6caD0d4880ac9f1bf756AB6a76eA4Cb339D6022d

//Mumbai gateway 0xBF62ef1486468a6bd26Dd669C06db43dEd5B849B
//Mumbai gas service 0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6
//Mumbai 0x6caD0d4880ac9f1bf756AB6a76eA4Cb339D6022d

//avalanche gateway 0xC249632c2D40b9001FE907806902f63038B737Ab
//avalanche gas service 0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6
//avalanche 0x6caD0d4880ac9f1bf756AB6a76eA4Cb339D6022d
