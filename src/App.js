import "./App.css";
import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Title from "./components/Title";
import bitcoin from "./Images/bitcoin.png";
import btc from "./Images/btc.png";
import red from "./Images/red.png";
import green from "./Images/green.png";
import btcImg from "./Images/btcImg.png";
import ethImg from "./Images/ethImg.png";
import bnbImg from "./Images/bnbImg.png";
import carImg from "./Images/carImg.png";
import solImg from "./Images/solanaImg.png";
import dogeImg from "./Images/dogeImg.png";
import TradeViewChart from "react-crypto-chart";

function App() {
  const [allCoins, setAllCoins] = useState([]);
  const [coinSearch, setCoinSearch] = useState([]);
  const [filterCoins, setFilterCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState({});

  const getInfo = async () => {
    const res = await fetch(`https://data.binance.com/api/v3/ticker/24hr`);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      const foundCoin = data.find((item) => item.symbol === "BTCUSDT");
      setSelectedCoin(foundCoin);
      let coinCopy = [];
      const defaultCoins = [];
      data.forEach((item, index) => {
        coinCopy.push({ name: item.symbol, id: index });
        if (item.symbol === "BTCUSDT") {
          defaultCoins.push(item);
        }
        if (item.symbol === "ETHUSDT") {
          defaultCoins.push(item);
        }
        if (item.symbol === "BNBUSDT") {
          defaultCoins.push(item);
        }
        if (item.symbol === "ADAUSDT") {
          defaultCoins.push(item);
        }
        if (item.symbol === "SOLUSDT") {
          defaultCoins.push(item);
        }
        if (item.symbol === "DOGEUSDT") {
          defaultCoins.push(item);
        }
      });
      setFilterCoins(defaultCoins);
      setAllCoins([...data]);
      setCoinSearch([...coinCopy]);
    }
  };

  const handleOnSelect = (item) => {
    const coin = item.name;
    const copyArr = allCoins.filter((item) => item.symbol === coin);

    if (filterCoins.length < 6) {
      setFilterCoins([
        copyArr[0],
        ...filterCoins.filter((c) => c.symbol !== coin),
      ]);
    } else {
      let copyFilter = [...filterCoins];
      copyFilter.pop();
      setFilterCoins([
        copyArr[0],
        ...copyFilter.filter((c) => c.symbol !== coin),
      ]);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="App">
      <Title />
      <div
        className="container my-4 p-1"
        style={{ width: "1100px", height: "600px" }}
      >
        <div className="m-2 px-3">
          <ReactSearchAutocomplete
            items={coinSearch}
            onSelect={handleOnSelect}
            placeholder="Search a crypto coin..."
          />
        </div>

        <div className=" row m-1">
          <div className="row col-7 m-2" id="selected-coin">
            <div
              className="col d-flex align-items-center justify-content-around"
              style={{ width: "346px", height: "150px" }}
            >
              <img
                src={bitcoin}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
              <span className="bitcoin-font"> Bitcoin </span>
              <img src={btc} alt="" style={{ width: "35px", height: "18px" }} />
            </div>
            <div className="col" id="bitcoin-prices">
              <p className="bitcoin-price-font">
                Bitcoin Price(BTC):{" "}
                <img
                  src={
                    Number(selectedCoin.priceChangePercent) > 0 ? green : red
                  }
                  width="15px"
                  alt="btc"
                />
                <span
                  className={
                    Number(selectedCoin.priceChangePercent) > 0
                      ? "green"
                      : "red"
                  }
                >
                  {Math.abs(selectedCoin.priceChangePercent).toFixed(2)}%
                </span>
              </p>
              <p className="asked-price">
                $
                {Number(selectedCoin.askPrice)?.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </p>

              <p className="volume">
                Volume:
                <span className="volume-number">
                  {" "}
                  {Number(selectedCoin.askPrice)?.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </p>
            </div>
            <div>
              <p className="bitcoin-price-chart">Bitcoin Price</p>
              <div className="parent">
                <TradeViewChart
                  interval="1000m"
                  containerStyle={{
                    minHeight: "300px",
                    minWidth: "400px",
                    marginBottom: "30px",
                  }}
                  pair="BTCUSDT"
                />
              </div>
            </div>
          </div>

          <div className="col row ms-3">
            <p className="other-coins">Other crypto coins</p>
            {filterCoins.map((item) => (
              <div
                key={item.symbol}
                className="card col-6 mx-1 "
                style={{ width: "183px", height: "150px" }}
              >
                <div className="d-flex justify-content-around mt-3">
                  {item.symbol === "BTCUSDT" && (
                    <img src={btcImg} alt="BTC" className="coin-img" />
                  )}
                  {item.symbol === "ETHUSDT" && (
                    <img src={ethImg} alt="ETH" className="coin-img" />
                  )}
                  {item.symbol === "BNBUSDT" && (
                    <img src={bnbImg} alt="BNB" className="coin-img" />
                  )}

                  {item.symbol === "ADAUSDT" && (
                    <img src={carImg} alt="ADAUSDT" className="coin-img" />
                  )}
                  {item.symbol === "SOLUSDT" && (
                    <img src={solImg} alt="SOLUSDT" className="coin-img" />
                  )}
                  {item.symbol === "DOGEUSDT" && (
                    <img src={dogeImg} alt="DOGEUSDT" className="coin-img" />
                  )}
                  <p className="coin-symbol">{item.symbol}</p>
                </div>
                <p className="asked-price-coins">
                  $
                  {Number(item.askPrice)?.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </p>

                <p className="coin-price-percent">
                  <img
                    src={Number(item.priceChangePercent) > 0 ? green : red}
                    width="15px"
                    alt="btc"
                  />
                  <span
                    className={
                      Number(item.priceChangePercent) > 0 ? "green" : "red"
                    }
                  >
                    {Math.abs(item.priceChangePercent).toFixed(2)}%
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
