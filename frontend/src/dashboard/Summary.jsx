import { useEffect, useState } from "react";
import { axios } from "../axiosConfig";
import HoldingsPieChart from "./HoldingsPieChart";

const Summary = () => {
  let [username, setUsername] = useState("User");
  let [holdings, setHoldings] = useState([]);
  let [total, setTotal] = useState(0);
  let [current, setCurrent] = useState(0);

  useEffect(() => {
    axios.get("/check-auth").then((res) => {
      console.log(res.data);
      setUsername(res.data.user.username);
    });
    axios.get("/getholdingdata").then((res) => {
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
    });
  }, []);

  const pnl = current - total;
  const pnlPercent = total === 0 ? 0 : (pnl / total) * 100;
  return (
    <>
      <div className="username">
        <h6>Hi, {username}</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Portfolio ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3
              style={{
                color: pnl >= 0 ? "green" : "red",
              }}
            >
              {pnl.toFixed(2)}{" "}
              <small
                style={{
                  color: pnl >= 0 ? "green" : "red",
                }}
              >
                {pnlPercent.toFixed(2)}%
              </small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{current.toFixed(2)}</span>{" "}
            </p>
            <p>
              Investment <span>{total.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
        <div className="section">
                <HoldingsPieChart holdings={holdings} />
        </div>
      </div>
    </>
  );
};

export default Summary;
