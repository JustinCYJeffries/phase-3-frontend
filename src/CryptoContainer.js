import React from "react"

function CryptoContainer({cryptoList, setSelectedCrypto}){
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
        <strong><h3 className="text_center">Choose a Crypto</h3></strong>
        {cryptoButtons}
    </div>)
}



export default CryptoContainer