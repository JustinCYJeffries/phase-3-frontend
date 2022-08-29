import './App.css';
import React, {useEffect, useState} from "react"
import PortfolioContainer from './PortfolioContainer'
import CryptoContainer from './CryptoContainer'

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
     <PortfolioContainer portfolioList={portfolioList}/>
     </div>
     <table>
      <tr>
        <td width="30%">
        <CryptoContainer cryptoList={cryptoList} />
        </td>
        <td>
          <InfoContainer cryptoList={cryptoList} portfolioList={portfolioList} purchaseList={purchaseList}/>
        </td>
      </tr>
     </table>


    </div>
  );
}

export default App;
