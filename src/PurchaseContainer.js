import React, { useState } from "react"

function PurchaseContainer({selectedPortfolio, selectedCrypto, purchaseList}){
    const [selectedPurchases, setSelectedPurchases] = useState([])
    if (selectedPortfolio != undefined)
        if(selectedCrypto != undefined)
        return(console.log(purchaseList.filter(x => x.portfolio_id == selectedPortfolio)))
            else return(console.log(purchaseList.filter(x => x.portfolio_id  == selectedPortfolio)))

    else return null



}


export default PurchaseContainer