import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import { TransactionModal } from "./WatchList";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { useState } from "react";

const Dashboard = () => {
  let[show,setShow] = useState(false);
  let[stock,setStock]=useState({});
  let[mode,setMode]=useState("");

  function openModal(selectedStock,selectedMode){
    setMode(selectedMode)
    setShow(true);
    setStock(selectedStock)
  }
  function closeModal(){
    setShow(false);
  }

  return (
    <>
    <TransactionModal stock={stock} closeModal={closeModal} show={show} mode={mode} setShow={setShow} />
      <div className="dashboard-container">
        <WatchList openModal={openModal}/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
