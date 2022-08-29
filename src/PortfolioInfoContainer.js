import React, { useState } from "react"

function PortfolioInfoContainer({portfolioPurchases, cryptoList}){
    const ports = portfolioPurchases.map(pp => {
        return (
                <tr>
                    <td >{cryptoList.find(x=> x.id == pp.crypto_id).name}</td>
                    <td width='20%'>{pp.amount_purchaced}</td>
                    <td width='20%'> {pp.purchase_price}</td>
                    <td width='20%'>{pp.profit}</td>
                    <td width='20%'>{Boolean(pp.sold)}</td>
                    </tr>

        )
    })
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
    </div>)
}
    


export default PortfolioInfoContainer

