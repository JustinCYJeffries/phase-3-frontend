import React, {useState} from "react"
import CryptoContainer from "./CryptoContainer"

function PortfolioContainer({portfolioList, cryptoList, purchaseList, setNewPort, setNewPurch}){
    const [selectedPortfolio, setSelectedPortfolio]=useState()
    const [formData, setFormData] = useState({
        name: ""
      })
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

    const portfolioButtons = portfolioList.map(portfolio=>{
        return (<button key={portfolio.id} id={portfolio.id} onClick={e=>clickHandler(e)}>{portfolio.name}</button>)
    })

    function clickHandler(e){
        portfolioList.map(portfolio =>{
            if (portfolio.id == e.target.id)
            return(
                setSelectedPortfolio(portfolio.id)
            )
            else return null
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        
        const newUser = {
           
          "name": formData.name
            
          }
        fetch("http://localhost:9292/portfolios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((r) => r.json())
          .then(setNewPort);
          
          
      
    }
        
    
  

    return (<div className="text_center">
        <strong><h3>Choose a Portfolio</h3></strong>
        {portfolioButtons}
        <strong><h3>Create a Portfolio</h3></strong>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text"
                    
                    label="Name"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
<button type="submit">Submit</button>
</form>
        <CryptoContainer cryptoList={cryptoList} selectedPortfolio={selectedPortfolio} purchaseList={purchaseList} setNewPurch={setNewPurch} />
    </div>)
}


export default PortfolioContainer