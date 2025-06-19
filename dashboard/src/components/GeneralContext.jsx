import React, { useState, useEffect } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";


const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
   openSellWindow: (uid) => {},
  closeSellWindow: () => {},

   holdings: [],
    setHoldings: () => {}, // Add this line
  updateHoldings: () => {},

});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellStockUID, setSelectedSellStockUID] = useState("");
   const [holdings, setHoldings] = useState([]);

 useEffect(() => {            //this
  fetch(`${process.env.REACT_APP_API_URL}/allHoldings`)
      .then((res) => res.json())
      .then((data) => setHoldings(data))
      .catch((error) => console.error("Error fetching holdings:", error));
  }, []);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

   const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedSellStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellStockUID("");
  };




 const updateHoldings = (newHolding) => {
    setHoldings((prevHoldings) => {
      const existingStock = prevHoldings.find(
        (stock) => stock.name === newHolding.name
      );

      if (existingStock) {
        if (newHolding.mode === "SELL") {
          const newQty =
            Number(existingStock.qty) - Number(newHolding.qty);
          if (newQty > 0) {
            return prevHoldings.map((stock) =>
              stock.name === newHolding.name
                ? { ...stock, qty: newQty }
                : stock
            );
          } else {
return prevHoldings.filter(
              (stock) => stock.name !== newHolding.name
            );
          }
        } else {
          // BUY
          const totalQty =
            Number(existingStock.qty) + Number(newHolding.qty);
          const newAvg =
            ((existingStock.avg * existingStock.qty) +
              (newHolding.price * newHolding.qty)) /
            totalQty;

          return prevHoldings.map((stock) =>
            stock.name === newHolding.name
              ? { ...stock, qty: totalQty, avg: newAvg }
              : stock
            );
         }
      } else {
        return newHolding.mode === "BUY"
          ? [...prevHoldings, { ...newHolding, qty: Number(newHolding.qty) }]
          : prevHoldings;
      }
    });
  };




  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        holdings,                                    //this
         setHoldings, // Add this
        updateHoldings,

      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedSellStockUID} />}
    
    </GeneralContext.Provider>
  );
};

export default GeneralContext;




































