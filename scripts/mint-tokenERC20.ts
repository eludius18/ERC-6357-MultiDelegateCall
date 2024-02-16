const hre = require("hardhat");
import dotenv from 'dotenv';

dotenv.config();

const TOKENERC20_ADDRESS = process.env.TOKENERC20_ADDRESS;

async function mintMain() {
    const { getNamedAccounts } = hre;
    const { deployer } = await getNamedAccounts();

    const tokenERC20 = await hre.ethers.getContractAt("TokenERC20", TOKENERC20_ADDRESS);
    

    await tokenERC20.mint(deployer, "10000000000000000000");

    console.log("Minted 1000 tokens to", deployer);
}

mintMain().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});