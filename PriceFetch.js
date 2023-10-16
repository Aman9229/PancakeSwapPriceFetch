const ethers = require('ethers');
const {
    factoryAddress,
    routerAddress,
    fromAddress,
    toAddress
} = require("./AddressList")
const {erc20ABI, factoryABI, pairABI, routerABI}= require("./AbiInfo");

// binance RPC server add URL Mainnet
const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed1.binance.org/"    //binance smart chain RPC Mainnet
)


// instance is like as object 
// instance is mainly use for chat with your smart contract
const factoryInstance = new ethers.Contract(
    factoryAddress,factoryABI,provider
)
 // console.log(factoryInstance);

 // router instance created 
 const routerInstance = new ethers.Contract(
    routerAddress,routerABI,provider
)
 const priceFetch=async(amount)=>{
    // token 1 instance
    const token1=new ethers.Contract(
        fromAddress,erc20ABI,provider 
    )  
    
    // swaping b/w token1 and token2 

     // token 2 instance
    const token2=new ethers.Contract(
        toAddress,erc20ABI,provider
    )

    // convert in decimal
    const decimal1= await token1.decimals();   // all support 18 decimal places it can be higher 
    const decimal2= await token2.decimals();
    const amountIn= ethers.utils.parseUnits(amount,decimal1).toString();  // amount in Wei BUSD Token
    console.log(" No of 100 BUSD :- ",amountIn,"is equals to");

    const amountOut=await routerInstance.getAmountsOut(amountIn,[     
        fromAddress,toAddress  
    ])    // amount in Wei WBNB Token
     const humanRead=ethers.utils.formatUnits(amountOut[1].toString(),decimal2)
     console.log(" No of WBNB :- ",humanRead);

 }
amount="100"; 
priceFetch(amount);



