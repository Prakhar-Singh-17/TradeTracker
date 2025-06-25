import { useEffect, useState } from "react";
import axios from "axios";

const Holdings = () => {
  let [total, setTotal] = useState(0);
  let [current, setCurrent] = useState(0);
  let [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allHoldings")
      .then((res) => {
        console.log(res);
        const data = res.data.holdings;
        setHoldings(res.data.holdings);
        let totalVal = 0;
        let currentVal = 0;
        data.map((stock) => {
          const currVal = stock.price * stock.qty;
          totalVal += currVal;
          const pnl = currVal - stock.avg * stock.qty;
          currentVal += currVal + pnl;
        });
        setTotal(totalVal);
        setCurrent(currentVal);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {holdings.map((stock, idx) => {
            let currVal = stock.price * stock.qty;
            let pnl = currVal - stock.avg * stock.qty;
            let pnlClass = pnl > 0 ? "profit" : "loss";
            let dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={idx}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currVal}</td>
                <td className={pnlClass}>{pnl.toFixed(2)}</td>
                <td className={pnlClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {total.toString().split(".")[0] + "."}
            <span>{total.toFixed(2).split(".")[1]}</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {current.toString().split(".")[0] + "."}
            <span>{current.toFixed(2).split(".")[1]}</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            {(current - total).toFixed(2)}
            <span>({((current - total) / total).toFixed(2)}%)</span>
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
