import React, { useState } from "react"
import PurchaseCreator from "./PurchaseCreator"
import SellButton from "./SellButton"

function InfoContainer({cryptoPurchases, cryptoList, selectedPortfolio, selectedCrypto, setNewPurch}){
   

    const ports = cryptoPurchases.map(pp => {
        
        return (
                <tr key={pp.id}>
                    <td >{cryptoList.find(x=> x.id == pp.crypto_id).name}</td>
                    <td width='20%'>{pp.amount_purchaced}</td>
                    <td width='20%'> {pp.purchase_price}</td>
                    <td width='20%'>{pp.profit}</td>
                    <td width='20%'><SellButton seller={pp.sold} cryptid={pp.id}/> </td>
                    <td width='20%'><button id={pp.id} onClick={e=>handleClick(e)}>Delete</button></td>
                    </tr>

        )
    })
    function handleClick(e){
       console.log(e)
        fetch(`http://localhost:9292/purchases/${e.target.id}`, { method: 'DELETE' })
        .then(setNewPurch)
    }
    
    return (<div>
    
        <table>
            <tbody>
                <tr>
                    <td width='40%'>Name: </td>
                    <td width='20%'>Amount Purchased: </td>
                    <td width='20%'>Purchase Price: </td>
                    <td width='20%'>Profit: </td>
                    <td width='20%'>Sold: </td>
                </tr>
                {ports}
                </tbody>
                </table>
                <PurchaseCreator selectedCrypto={selectedCrypto} selectedPortfolio={selectedPortfolio} setNewPurch={setNewPurch}/>
    </div>)
}
    



export default InfoContainer