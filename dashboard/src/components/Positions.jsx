import React, { useState, useEffect } from "react";   //hook-useEffect to connect with API
import axios, { all } from "axios";    //npm  i axios ->axios to connect with API
import { VerticalGraph } from "./VerticalGraph";

//import { positions } from "../data/data";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

 useEffect(() => {
  const API = process.env.REACT_APP_API_URL || "http://localhost:3002";
  console.log("Positions API URL:", API);

  axios
    .get(`${API}/allPositions`, { withCredentials: true })
    .then((res) => {
      if (Array.isArray(res.data)) {
        setAllPositions(res.data);
      } else {
        console.error("Expected array, got:", res.data);
      }
    })
    .catch((err) => {
      console.error("Error fetching positions:", err);
    });
}, []);


  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
        </thead>
        <tbody>
          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;






































































































