//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract memoryApp{
    struct photoMemory{
        string IPFSimg;
        string message;
        uint time;
    }

    mapping(address=> photoMemory[]) memories;

    function createMemory(string memory img, string memory comment) public {
        photoMemory memory newMemory = photoMemory(img,comment, block.timestamp);
        memories[msg.sender].push(newMemory);
    }

    function returnMemories(address user) public view returns(photoMemory[] memory){
        return memories[user];
    }

}