import React, { useState } from "react"
import InfoContainer from "./InfoContainer"
import PortfolioInfoContainer from "./PortfolioInfoContainer"

function PurchaseContainer({selectedPortfolio, selectedCrypto, purchaseList, cryptoList}){
    
   
   
    const portfolioPurchases= purchaseList.filter(x => x.portfolio_id == selectedPortfolio)
    const cryptoPurchases = portfolioPurchases.filter(x => x.crypto_id == selectedCrypto)
    if (selectedPortfolio != undefined)
        if(selectedCrypto != undefined)
        
        return(<div>
            <InfoContainer cryptoPurchases={cryptoPurchases} cryptoList={cryptoList}/>
            
            </div>)
            
            
            else return(<div>something is supposed to be here<PortfolioInfoContainer portfolioPurchases={portfolioPurchases} cryptoList={cryptoList}/></div>)

    else return null


}


export default PurchaseContainer