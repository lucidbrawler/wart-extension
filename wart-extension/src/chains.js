const Ethereum = {
    hex: '0x1',
    name: 'Ethereum',
    rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/RarlTPok19x7FfVDnUuOCB424Wl1O6z3',
    ticker: "ETH"
};


const Polygon = {
    hex: '0x89',
    name: 'Polygon',
    rpcUrl: 'https://polygon-mainnet.g.alchemy.com/v2/RarlTPok19x7FfVDnUuOCB424Wl1O6z3',
    ticker: "MATIC"
};

const Warthog = {
    hex: '0x13',
    name: 'Warthog',
    rpcUrl: 'http://localhost:127.0.0.1:3500',
    ticker: "WARTHOG"
};

export const CHAINS_CONFIG = {
    "0x1": Ethereum,
    "0x13": Warthog,
    "0x89": Polygon,
};