import React, { useState } from "react"
import InfoContainer from "./InfoContainer"
import PortfolioInfoContainer from "./PortfolioInfoContainer"

function PurchaseContainer({selectedPortfolio, selectedCrypto, purchaseList, cryptoList, setNewPurch}){
    
   
   
    const portfolioPurchases= purchaseList.filter(x => x.portfolio_id == selectedPortfolio)
    const cryptoPurchases = portfolioPurchases.filter(x => x.crypto_id == selectedCrypto)
    if (selectedPortfolio != undefined)
        if(selectedCrypto != undefined)
        
        return(<div>
            <InfoContainer setNewPurch={setNewPurch}cryptoPurchases={cryptoPurchases} cryptoList={cryptoList} selectedCrypto={selectedCrypto} selectedPortfolio={selectedPortfolio}/>
            
            </div>)
            
            
            else return(<div><PortfolioInfoContainer portfolioPurchases={portfolioPurchases} cryptoList={cryptoList}/></div>)

    else return null


}


export default PurchaseContainer