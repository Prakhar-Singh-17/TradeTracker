import { useEffect, useState } from "react";
import { axios } from "../axiosConfig";

const Holdings = () => {
  let [total, setTotal] = useState(0);
  let [current, setCurrent] = useState(0);
  let [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("/getholdingdata")
      .then((res) => {
        const data = res.data.holdings;
        setHoldings(data);

        let totalVal = 0;
        let currentVal = 0;

        data.forEach((item) => {
          const price = item.stock.price;
          const percentChange =
            parseFloat(item.stock.percent.replace("%", "")) / 100;
          const avgCost = price / (1 + percentChange);
          const qty = item.quantity;

          const currVal = price * qty;
          totalVal += avgCost * qty;
          currentVal += currVal;
        });

        setTotal(totalVal);
        setCurrent(currentVal);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const pnl = current - total;
  const pnlPercent = total === 0 ? 0 : (pnl / total) * 100;

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
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
          </thead>
          <tbody>
            {holdings.map((item, idx) => {
              const stock = item.stock;
              const qty = item.quantity;
              const ltp = stock.price;
              const percent = parseFloat(stock.percent.replace("%", "")) / 100;
              const avgCost = ltp / (1 + percent);
              const curVal = ltp * qty;
              const totalCost = avgCost * qty;
              const pnl = curVal - totalCost;
              const netChg = ltp - avgCost;

              return (
                <tr key={idx}>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avgCost.toFixed(2)}</td>
                  <td>{ltp}</td>
                  <td>{curVal.toFixed(2)}</td>
                  <td className={pnl >= 0 ? "profit" : "loss"}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={netChg >= 0 ? "profit" : "loss"}>
                    {netChg.toFixed(2)}
                  </td>
                  <td className={percent >= 0 ? "profit" : "loss"}>
                    {stock.percent}
                  </td>
                </tr>
              );
            })}
          </tbody>
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
          <h5
            style={{
              color: pnl >= 0 ? "green" : "red",
            }}
          >
            {pnl.toFixed(2)}
            <span style={{ color: pnl >= 0 ? "green" : "red" }}>
              {" "}
              ({pnlPercent.toFixed(2)}%)
            </span>
          </h5>
          <p>P&L</p>
        </div>
      </div>
            <HoldingsPieChart holdings={holdings} />
    </>
  );
};

export default Holdings;
