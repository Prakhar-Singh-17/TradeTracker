import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Positions = () => {
  let[positions , setPostions]=useState([]);

   useEffect(()=>{
       axios
      .get("http://localhost:8080/allPositions")
      .then((res) => {
        console.log(res);
        setPostions(res.data.positions);
    },[])});
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((stock, idx) => {
            let currVal = stock.price * stock.qty;
            let pnl = currVal - stock.avg * stock.qty;
            let pnlClass = pnl > 0 ? "profit" : "loss";
            let dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={idx}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{stock.price}</td>
                <td className={pnlClass}>{pnl.toFixed(2)}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
