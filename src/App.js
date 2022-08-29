import './App.css';
import React, {useEffect, useState} from "react"
import PortfolioContainer from './PortfolioContainer'
import CryptoContainer from './CryptoContainer'
import InfoContainer from './InfoContainer'


function App() {
  const [portfolioList, setPortfolioList] = useState([])
  const [cryptoList, setCryptoList] = useState([])
  const [purchaseList, setPurchaseList] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:9292/portfolios")
      .then((r) => r.json())
      .then(setPortfolioList);
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/cryptos")
      .then((r) => r.json())
      .then(setCryptoList);
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:9292/purchases")
      .then((r) => r.json())
      .then(setPurchaseList);
  }, []);



  return (
    <div className="App">
     <div className="header">
     <PortfolioContainer portfolioList={portfolioList}  cryptoList={cryptoList} purchaseList={purchaseList}/>
     </div>
     
    </div>
  );
}

export default App;
