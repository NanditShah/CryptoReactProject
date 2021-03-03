import { useState, useEffect } from "react";
import "./App.css";
import Select from "@material-ui/core/Select";
import { makeStyles } from '@material-ui/core/styles';

import axios from "axios";
import { MenuItem,FormControl,InputLabel } from "@material-ui/core";
import Chart from './Components/Chart'
import InfoArea from "./Components/InfoArea";
import {root} from '@material-ui/core/styles';
function App() {

  var [data, setData] = useState([]);
  const [cryptoData, setCryptoData] = useState({});
  var [selectedCurrency, setSelectedCurrency] = useState("bitcoin");
  var urlForchart = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max&interval=daily";
  var urlForDailyData = "https://api.coingecko.com/api/v3/coins/bitcoin";
  

  useEffect(() => {
    fetchData(urlForchart,urlForDailyData);
  }, []);

  const fetchData = (url1,url2) => {
    axios
      .get(url1)
      .then(function (response) {
        // console.log(response.data.prices);
        setData(response.data.prices);
        // console.log(data);
      })
      .catch(function (err) {
        console.log(err);
      });
      axios
      .get(url2)
      .then(function (response) {
        console.log(response.data.image.large);
        // console.log(response.data.market_data.current_price.usd);
        // console.log(response.data.market_data.market_cap.usd);
        // console.log(response.data.market_data.market_cap_rank);
        // console.log(response.data.market_data.price_change_percentage_24h_in_currency.usd);
        setCryptoData({
          image:response.data.image.large,
          current_price:response.data.market_data.current_price.usd,
          market_cap:response.data.market_data.market_cap.usd,
          market_cap_rank:response.data.market_data.market_cap_rank,
          price_change_percentage_24h_in_currency:response.data.market_data.price_change_percentage_24h_in_currency.usd
        })
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    var url1 = "https://api.coingecko.com/api/v3/coins/"+e.target.value+"/market_chart?vs_currency=usd&days=max&interval=daily"
    var url2 = "https://api.coingecko.com/api/v3/coins/"+e.target.value
    fetchData(url1,url2)
    // console.log(url1);
    setSelectedCurrency(e.target.value)
  }



   var currency = [
    { name: "BitCoin", id: "bitcoin" },
    { name: "Ethereum (ETH)", id: "ethereum" },
    { name: "Litecoin (LTC)", id: "litecoin" },
    { name: "Cardano (ADA)", id: "cardano" },
    { name: "Polkadot (DOT)", id: "polkadot" },
    { name: "Stellar (XLM)", id: "stellar" },
    { name: "Chainlink", id: "chainlink" },
    { name: "Binance Coin (BNB)", id: "binancecoin" },
    { name: "Tether (USDT)", id: "tether" },
    { name: "Monero (XMR)", id: "monero" },
  ];
  var x = currency.map((data) => (
    
    <MenuItem style={{fontFamily:"Recursive"}} id={data.id} value={data.id}>{data.name}</MenuItem>
  ));

  return (
    <div className="App">
    <FormControl   variant='outlined'>
    <InputLabel style={{color:'white'}}>Currency</InputLabel>
    <Select  onChange={handleChange} displayEmpty value={selectedCurrency}  label='Currency' style={{backgroundColor:"#801336",color:'white',fontFamily:"Recursive"}}>

      {x}
    </Select>
    </FormControl>
    <InfoArea data={cryptoData} />
    <Chart data={data} />
    </div>
  );
}

export default App;
