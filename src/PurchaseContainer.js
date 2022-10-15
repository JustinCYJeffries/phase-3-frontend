import React, { useState, useEffect } from "react"
import InfoContainer from "./InfoContainer"
import PortfolioInfoContainer from "./PortfolioInfoContainer"

function PurchaseContainer({selectedPortfolio, selectedCrypto, purchaseList, cryptoList, setNewPurch, selectedPortfolioPurchases, selectedCryptoPurchase}){
    
  
   
    
    const portfolioPurchases = selectedPortfolioPurchases.purchases
    const cryptoPurchases = selectedCryptoPurchase
    const portProfit = portfolioPurchases.reduce((prev, current) => prev + parseFloat(current.profit), 0)
    const cryptoProfit = cryptoPurchases.reduce((prev, current) => prev + parseFloat(current.profit), 0)
    if (selectedPortfolio != undefined)
        if(selectedCrypto != undefined)
        
        return(<div>
            {console.log(cryptoPurchases)}
            Crypto Profit = {`${cryptoProfit}`}
            <InfoContainer setNewPurch={setNewPurch}cryptoPurchases={cryptoPurchases} cryptoList={cryptoList} selectedCrypto={selectedCrypto} selectedPortfolio={selectedPortfolio}/>
            
            </div>)
            
            
            else return(<div>
                {console.log(portfolioPurchases)}
                Portfolio Profit = {`${portProfit}`}
                <PortfolioInfoContainer portfolioPurchases={portfolioPurchases} cryptoList={cryptoList}/></div>)

    else return null


}


export default PurchaseContainer