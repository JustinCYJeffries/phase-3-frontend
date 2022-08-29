import './App.css';
import React, {useEffect, useState} from "react"
import PortfolioContainer from './PortfolioContainer'
import CryptoContainer from './CryptoContainer'
import InfoContainer from './InfoContainer'

function App() {
  const [portfolioList, setPortfolioList] = useState([])
  const [cryptoList, setCryptoList] = useState([])
  const [purchaseList, setPurchaseList] = useState([])
  const [selectedPortfolio, setSelectedPortfolio]=useState()
  const [selectedCrypto, setSelectedCrypto]=useState()

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
     <PortfolioContainer portfolioList={portfolioList} setSelectedPortfolio={setSelectedPortfolio}/>
     </div>
     <table>
      <tbody>
      <tr>
        <td width="30%">
        <CryptoContainer cryptoList={cryptoList} setSelectedCrypto={setSelectedCrypto} />
        </td>
        <td>
          <InfoContainer cryptoList={cryptoList} portfolioList={portfolioList} purchaseList={purchaseList} selectedPortfolio={selectedPortfolio}/>
        </td>
      </tr>
      </tbody>
     </table>


    </div>
  );
}

export default App;
