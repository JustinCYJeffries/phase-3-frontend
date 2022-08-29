import React, {useState} from "react"
import PurchaseContainer from './PurchaseContainer'

function CryptoContainer({cryptoList, selectedPortfolio, purchaseList, setNewPurch}){
    const [selectedCrypto, setSelectedCrypto]=useState()

    const cryptoButtons = cryptoList.map(crypto=>{
        return (<div className="box" key={crypto.id} id={crypto.id} onClick={e=>clickHandler(e)}><br/>{crypto.name}<br/>{crypto.price}<br/></div>)
    })

    function clickHandler(e){
        cryptoList.map(crypto =>{
            if (crypto.id == e.target.id)
            return(
                setSelectedCrypto(crypto.id)
            )
            else return null
        })
    }
    
    return (<div>
        <table>
      <tbody>
      <tr>
        <td width="30%">
        <strong><h3 className="text_center">Choose a Crypto</h3></strong>
        {cryptoButtons}
        </td>
        <td>
            
          <PurchaseContainer selectedCrypto={selectedCrypto} selectedPortfolio={selectedPortfolio} purchaseList={purchaseList} cryptoList={cryptoList} setNewPurch={setNewPurch}/>
        </td>
       
      </tr>
      </tbody>
     </table>
       
       
    </div>)
}



export default CryptoContainer