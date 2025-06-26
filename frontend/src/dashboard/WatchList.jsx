import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Tooltip from "@mui/material/Tooltip";
import AddchartIcon from "@mui/icons-material/AddChart";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { axios } from "../axiosConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; 

const WatchList = ({ openModal }) => {
  let [stocklist, setStockList] = useState([]);
  let [watchlist, setWatchlist] = useState([]);
  let [viewWatchlist, setViewWatchlist] = useState(false);

  let selectedStyle = "col border border-2";

  useEffect(() => {
    axios
      .get("/allStocks")
      .then((res) => {
        setStockList(res.data.stocks);
      })
      .catch((err) => {
        alert("Could not fetch data");
      });
    fetchwatchlist();
  }, []);

  function fetchwatchlist() {
    axios
      .get("/getwatchlistdata")
      .then((res) => {
        setWatchlist(res.data.watchlist);
      })
      .catch((err) => {
        alert("Could not fetch data");
      });
  }

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <div className="row mt-0">
          <div
            onClick={() => setViewWatchlist(false)}
            className={viewWatchlist ? "col" : selectedStyle}
            style={{ textAlign: "center", padding: "1rem", cursor: "pointer" }}
          >
            All
          </div>
          <div
            onClick={() => setViewWatchlist(true)}
            className={viewWatchlist ? selectedStyle : "col"}
            style={{ textAlign: "center", padding: "1rem", cursor: "pointer" }}
          >
            Watchlist
          </div>
        </div>
      </div>
      {!viewWatchlist ? (
        <ul className="list">
          {stocklist.map((stock, idx) => {
            return (
              <WatchListItem
                stock={stock}
                key={idx}
                openModal={openModal}
                viewWatchlist={viewWatchlist}
                fetchwatchlist={fetchwatchlist}
              />
            );
          })}
        </ul>
      ) : (
        <ul className="list">
          {watchlist.map((stock, idx) => {
            return (
              <WatchListItem
                stock={stock}
                key={idx}
                openModal={openModal}
                viewWatchlist={viewWatchlist}
                fetchwatchlist={fetchwatchlist}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default WatchList;

function WatchListItem({ stock, openModal, viewWatchlist, fetchwatchlist }) {
  let [showWatchListOptions, setShowWatchListOptions] = useState(false);

  function handleMouseEnter() {
    setShowWatchListOptions(true);
  }
  function handleMouseLeave() {
    setShowWatchListOptions(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListOptions && (
        <WatchListActions
          stock={stock}
          openModal={openModal}
          viewWatchlist={viewWatchlist}
          fetchwatchlist={fetchwatchlist}
        />
      )}
    </li>
  );
}

function WatchListActions({ stock, openModal, viewWatchlist, fetchwatchlist }) {
  function addtowatchlist() {
    axios.post("/addToWatchlist", { stock }).then((res) => {
      if (res.data.success) {
        fetchwatchlist();
          toast.success(`${stock.name} added to watchlist`);
        } else {
          toast.error("Failed to add to watchlist");
        }
    });
  }
    function removefromwatchlist() {
    axios.post("/removefromwatchlist", { stock }).then((res) => {
       if (res.data.success) {
        fetchwatchlist();
          toast.success(`${stock.name} Removed from watchlist`);
        } else {
          toast.error("Failed to add to watchlist");
        }
    });
  }
  return (
    <>
      <span className="actions" key={stock.name}>
        <Tooltip title="Buy (B)" placement="top" arrow>
          <button className="buy" onClick={() => openModal(stock, "Buy")}>
            B
          </button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow>
          <button className="sell" onClick={() => openModal(stock, "Sell")}>
            S
          </button>
        </Tooltip>
        {viewWatchlist ? (
          <Tooltip title="Remove from Watchlist" placement="top" arrow>
            <button className="action" onClick={removefromwatchlist}>
              <BookmarkRemoveIcon className="icon" />
            </button>
          </Tooltip>
        ) : (
          <Tooltip title="Add to Watchlist" placement="top" arrow>
            <button className="action" onClick={addtowatchlist}>
              <AddchartIcon className="icon" />
            </button>
          </Tooltip>
        )}
      </span>
    </>
  );
}
export function TransactionModal({ stock, closeModal, show, mode }) {
  const [qty, setQty] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("/addToHoldings", {
        stock,
        qty,
        mode
      });
      closeModal();
       navigate("/dashboard/holdings");
    } catch (err) {
      alert("Failed to add to holdings");
      console.error(err);
    }
  }

  if (!show) return null;

  return (
    <div className="custom-modal-backdrop" draggable="true">
      <form className="custom-modal-form" onSubmit={handleSubmit}>
        <input name="name" value={stock.name} disabled />
        <input name="price" type="number" value={stock.price} disabled />
        <input
          name="mode"
          className={mode === "Buy" ? "modalBuy" : "modalSell"}
          value={mode}
          disabled
        />
        <input
          name="qty"
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          required
        />
        <div className="btn-group">
          <button className="btn" type="submit">
            Submit
          </button>
          <button
            className="btn"
            type="button"
            style={{ backgroundColor: "red" }}
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
