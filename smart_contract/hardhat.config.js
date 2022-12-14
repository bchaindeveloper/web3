// https://eth-goerli.g.alchemy.com/v2/91ZEAx5S_y4xj9Jz0YFGwgXGQ6vEsxl4

require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"


module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/91ZEAx5S_y4xj9Jz0YFGwgXGQ6vEsxl4',
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    }
  }
};
