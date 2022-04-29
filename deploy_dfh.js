
async function main() {
    // We get the contract to deploy
    const contract = await ethers.getContractFactory('StakingDFH');
    console.log('Deploying StakingToken...');
    const dfhToken = '0xFC15F942F73039EA377C4da9d41FDA32E56E5aa4'
    const token = await contract.deploy(dfhToken);
    await token.deployed();
    console.log('StakingToken deployed to:', token.address);
    console.log(`Please enter this command below to verify your contract:`)
    console.log(`npx hardhat verify --network ${token.deployTransaction.chainId === 56 ? 'mainnet' : 'testnet'} ${token.address} ${dfhToken}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
