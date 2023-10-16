
// provide decimal places of token for ERC 20 Token;
const erc20ABI=["function decimals() public view returns (uint8)"]

// it will return add liqudity provider to add tokenA and tokenB
// Both A an B Contract address add in getpair function and get addresss of liqudity provider   
 //  0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16  liquidity provider for BUSB and WBNB
const factoryABI=[
    "function getPair(address tokenA, address tokenB) external view returns (address pair)"
]

const pairABI=[
    "function token0() external view returns (address)",  
    "function token1() external view returns (address)",
    "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)"
]
// routerABI mostly used price fetching 
const routerABI=[
    "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)" 
]

module.exports = { erc20ABI, factoryABI, pairABI, routerABI };
