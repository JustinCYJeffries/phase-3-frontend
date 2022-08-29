import React, { useState } from "react"

function SellButton({cryptid, seller}){
    function handleClick(e){
     fetch(`http://localhost:9292/purchases/${cryptid}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          sold: true
        })
      })
       .then(response => {
          console.log(response.status); 
          return response.json();
        })
        .then(data => console.log(data));
     }
    
        
    


    if (seller === false)
    return(
        <button cryptid={cryptid} onClick={e=>handleClick(e)} >Sell</button>
        )
        else return <div>
        Sold
    </div>
    

}

export default SellButton