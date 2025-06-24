import { useState } from "react";
import { watchlist } from "../data/data";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Tooltip from "@mui/material/Tooltip";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const WatchList = ({openModal}) => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, idx) => {
          return <WatchListItem stock={stock} key={idx} openModal={openModal}/>;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

function WatchListItem({ stock,openModal }) {
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
            <KeyboardArrowUpIcon className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListOptions && <WatchListActions stock={stock} openModal={openModal}/>}
    </li>
  );
}

function WatchListActions({ stock , openModal }) {
  return (
    <span className="actions" key={stock.name}>
      <Tooltip title="Buy (B)" placement="top" arrow>
        <button className="buy" onClick={()=>openModal(stock,"Buy")}>B</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow>
        <button className="sell" onClick={()=>openModal(stock,"Sell")}>S</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow>
        <button className="action">
          <BarChartIcon className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow>
        <button className="action">
          <MoreHorizIcon className="icon" />
        </button>
      </Tooltip>
    </span>
  );
}

export function TransactionModal({stock ,closeModal, show, mode}) {

  if(!show) return null
  return (
    <div className="custom-modal-backdrop" draggable="true">
      <form method="post" action="http://localhost:8080/addOrder" className="custom-modal-form">
        <input name="name" value={stock.name} disabled/>
        <input name="price" type="number" placeholder="Price" value={stock.price} />
        <input name="mode" className={(mode==="Buy"?"modalBuy":"modalSell")} value={mode} disabled/>
        <input name="qty" type="number" placeholder="Quantity" />
        <div className="btn-group">
          <button className="btn" type="submit" onClick={closeModal} >Submit</button>
          <button className="btn" type="button" style={{backgroundColor:"red"}} onClick={closeModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
