// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import { AxelarExecutable } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol";
import { IAxelarGateway } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import { IAxelarGasService } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";
import { IERC20 } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract VaccineEnrollmentService is AxelarExecutable, Ownable {
  using Counters for Counters.Counter;

  Counters.Counter private vaccineCounter;
  IAxelarGasService public immutable gasService;

  struct Vaccine {
    bytes32 hash;
    string name;
    string description;
    string imageLink;
    uint registeredAt;
    uint expiresAt;
  }

  bytes32[] hashes;

  mapping(bytes32 => Vaccine) allVaccines;

  event NewVaccineEnrolled(
    bytes32 indexed hash,
    string indexed name,
    string description,
    string imageLink,
    uint registeredAt,
    uint expiresAt
  );

  constructor(
    address gateway_,
    address gasReceiver_
  ) AxelarExecutable(gateway_) {
    gasService = IAxelarGasService(gasReceiver_);
  }

  function enrollVaccine(
    string calldata _name,
    string calldata _description,
    string calldata _imageLink,
    uint _expiresAt
  ) external onlyOwner {
    vaccineCounter.increment();
    bytes32 hash_ = generateHash(_name);

    allVaccines[hash_] = Vaccine({
      hash: hash_,
      name: _name,
      description: _description,
      imageLink: _imageLink,
      registeredAt: block.timestamp,
      expiresAt: _expiresAt
    });

    hashes.push(hash_);
  }

  //retrieve hash for demo
  function getHash(uint _index) external view onlyOwner returns (bytes32) {
    return hashes[_index];
  }

  function getAllVaccines() external view onlyOwner returns (Vaccine[] memory) {
    Vaccine[] memory vaccs = new Vaccine[](hashes.length);
    for (uint i = 0; i < hashes.length; i++) {
      vaccs[i] = allVaccines[hashes[i]];
    }

    return vaccs;
  }

  function generateHash(string memory _name) internal view returns (bytes32) {
    return keccak256(abi.encodePacked(vaccineCounter.current(), _name));
  }

  //source chain verify
  function verify(bytes32 _hash) external view returns (Vaccine memory) {
    //retrieve the vaccine information
    return allVaccines[_hash];
  }

  //Handles 2-way GMP
  function _execute(
    string calldata sourceChain_,
    string calldata sourceAddress_,
    bytes calldata payload
  ) internal override {
    //decode the payload
    (bytes32 hash, address checker) = abi.decode(payload, (bytes32, address));
    //retrieve the vaccine information
    Vaccine memory vaccine = allVaccines[hash];
    //encode the result
    bytes memory response = abi.encode(vaccine, checker);
    //use GMP to send a response
    gateway.callContract(sourceChain_, sourceAddress_, response);
  }
}

//avax gateway 0xC249632c2D40b9001FE907806902f63038B737Ab
//avax gas service 0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6
//avax 0x6214a36f134Bd0211bBB2728aDF9Db64EaFA32FB

// 0xdd4b6093bb9d732796a1329c8cafbdc12a508cfd0a6d2b6a041123ac7418ddb5
// 0x3a356c806e4489ea18170497f7bc3b699f6874cc53ab86370e31dd464d1d9540
// 0x20495c73835aac65eb621c316628295a958e47244c5cc297d1af8e48deb35f7a
// 0x4de858b75fb2d614fb238487862f7ab10eb5e69be28c25083b78360fe0348913
