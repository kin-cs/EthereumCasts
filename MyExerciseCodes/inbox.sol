pragma solidity ^0.4.17; // compile with this version

contract Inbox { // contract is a class in solidity
    string public message; // declare the PUBLIC instance variables, and this is PERMENANT in blockchain! Meanwhile, it will automatically create a get-function with the same name of this variable name 
    
    function Inbox(string initialMessage) public { // construction function, same name as the contract (class), will initiate automatically once the contract(instance) is created
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    //function getMessage() public view returns (string) { // "public view returns", mean only view(return) it but no modification here
    //    return message;
    //}
}
