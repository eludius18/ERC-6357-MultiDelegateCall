import { ethers } from "ethers";
require("dotenv").config();

const TOKENERC20_ADDRESS = process.env.TOKENERC20_ADDRESS;

async function batchtx() {
  const hre = require("hardhat");
  
  const tokenerc20 = await hre.ethers.getContractAt("TokenERC20", TOKENERC20_ADDRESS);

  const tokenSupportedMultiDelegateCallData = [];
    const tokenItf = tokenerc20.interface;
    tokenSupportedMultiDelegateCallData.push(
      tokenItf.encodeFunctionData('transfer', [
        "0x8aD6e64723DCb6d8cBd3Ed285E5b234184D222A5",
        ethers.parseEther("0.1"),
      ]),
      tokenItf.encodeFunctionData('transfer', [
        "0x8aD6e64723DCb6d8cBd3Ed285E5b234184D222A5",
        ethers.parseEther("0.1"),
      ]),
      tokenItf.encodeFunctionData('transfer', [
        "0x8aD6e64723DCb6d8cBd3Ed285E5b234184D222A5",
        ethers.parseEther("0.8"),
      ])
    );

    console.log("Token Supported Multi Delegate Call Data: ", tokenSupportedMultiDelegateCallData);

    await tokenerc20.multicall(tokenSupportedMultiDelegateCallData);
}

batchtx().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});