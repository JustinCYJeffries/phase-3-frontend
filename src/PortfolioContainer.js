import React from "react"

function PortfolioContainer({portfolioList, setSelectedPortfolio}){
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
    
    return (<div className="text_center">
        <strong><h3>Choose a Portfolio</h3></strong>
        {portfolioButtons}
    </div>)
}


export default PortfolioContainer