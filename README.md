# ERC-6357-MultiDelegateCall

This project is an implementation of the MultiDelegateCall proposal (ERC-6357) using Hardhat, a development environment for Ethereum

This EIP standardizes an interface containing a single function, `multicall`, allowing EOAs to call multiple functions of a smart contract in a single transaction, and revert all calls if any call fails.

[ERC-6357](https://eips.ethereum.org/EIPS/eip-6357)


## Project Structure

- `contracts/`: Contains the Solidity contracts for the project
- `deploy/`: Contains the deployment scripts for the contracts
- `test/`: Contains the test scripts for the contracts


## Prerequisites

- Node.js and npm installed on your machine
- Hardhat installed globally or locally in your project. You can install it using `npm install --save-dev hardhat`


## Setup

1. Clone the repository to your local machine using `git clone https://github.com/eludius18/ERC-6357-MultiDelegateCall.git`

2. Navigate to the project directory

3. Install the project dependencies using `npm install`


## Deploying the Contracts

Follow these steps to deploy the contracts:

1. Compile the contracts using `npx hardhat compile`. This step is necessary before you can deploy the contracts

2. Deploy the `TokenERC20` contract using `npx hardhat deploy --network arbitrum --tags TokenERC20`. This deploys the `TokenERC20` Smart Contract

> **Note:** The `--network arbitrum` flag is used to specify that the contracts should be deployed to the Arbitrum Sepolia network that you started in step 1


## Setting Up Environment Variables

Before running the scripts, you need to set up your environment variables. Follow these steps:

1. Create a new file in the root of your project named `.env`

2. Open the `.env` file and add the following variables:

```env
TOKENERC20_ADDRESS = <YOUR_TOKENERC20_CONTRACT_ADDRESS>
RPC_URL_ARBITRUM = <YOUR_ARBITRUM_RPC_URL>
PRIVATE_KEY = <YOUR_PRIVATE_KEY>
```

## Executing the Scripts

Follow these steps to execute the scripts:

Run the `1-batchTx.ts` script using `npx hardhat run --network arbitrum scripts/1-batchTx.ts`. This script interacts with the deployed contracts for creating a Batch Transaction

Run the `mint-tokenERC20.ts` script using `npx hardhat run --network arbitrum scripts/mint-tokenERC20.ts`. This script interacts with the deployed contracts for minting Tokens


## Contributing

Contributions are welcome! Please feel free to submit a pull request