pragma solidity ^0.4.19;

import "/home/hjwang/Tools/ContraMaster/contracts/FreeEth.sol";

contract Attack_FreeEth2 {

  FreeEth public target_contract;

  function Attack_FreeEth2(address _targetContract) public payable {
      target_contract = FreeEth(_targetContract);
  } 

  function vultron_GetFreebie(uint256 vultron_amount) public payable{
    target_contract.GetFreebie.value(vultron_amount)();
  } 

  function vultron_withdraw(uint256 vultron_amount) public payable{
    target_contract.withdraw.value(vultron_amount)();
  } 

  function vultron_Command(uint256 vultron_amount, address adr, bytes data) public payable{
    target_contract.Command.value(vultron_amount)(adr, data);
  } 

  function() public payable {
    revert();
  }
} 
