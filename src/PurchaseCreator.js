import React, {useEffect, useState} from "react"

function PurchaseCreator({selectedPortfolio, selectedCrypto, setNewPurch}){
    const [formData, setFormData] = useState({
        amount_purchaced: "",
        purchase_price:""
      })
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
      function handleSubmit(e) {
        e.preventDefault()
        
        const newPurchase = {
           
          "amount_purchaced": formData.amount_purchaced,
          "purchase_price": formData.purchase_price, 
          "crypto_id"   : selectedCrypto,
          "sold"   : false,
          "portfolio_id": selectedPortfolio
          }
        fetch("http://localhost:9292/purchases", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPurchase),
        })
          .then((r) => r.json())
          .then(setNewPurch);
          
          
      
    }
    return(<div>
 <strong><h3>Create a Purchase</h3></strong>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="number"
                  
                  pattern="[0-9]*"
                  inputMode="numeric"  
                    label="amount_purchaced"
                    placeholder="Amount Purchased"
                    name="amount_purchaced"
                    value={formData.amount_purchaced}
                    onChange={handleChange}
                    required
                  /> 
                  <input type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  label="purchase_price"
                  placeholder="Purchase Price"
                  name = "purchase_price"
                  value={formData.purchase_price}
                  onChange={handleChange}
                  required
                />
<button type="submit">Submit</button>
</form>
    </div>)
}

export default PurchaseCreator