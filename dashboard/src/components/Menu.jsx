import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  let [optionSelected, setOptionSelected] = useState();
  let [profileDropActive, setProfileDropActive] = useState(false);

  function handleOptionSelect(index) {
    setOptionSelected(index);
  }

  const selectedClass = "menu selected";
  const hoverClass = "menu";

  return (
    <div className="menu-container">
      <img src="assets/logo.png" style={{ width: "30px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleOptionSelect(0)}
              className={optionSelected === 0 ? selectedClass : hoverClass}
            >
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleOptionSelect(1)}
              className={optionSelected === 1 ? selectedClass : hoverClass}
            >
              <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleOptionSelect(2)}
              className={optionSelected === 2 ? selectedClass : hoverClass}
            >
              <p>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleOptionSelect(3)}
              className={optionSelected === 3 ? selectedClass : hoverClass}
            >
              <p>Position</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleOptionSelect(4)}
              className={optionSelected === 4 ? selectedClass : hoverClass}
            >
              <p>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleOptionSelect(5)}
              className={optionSelected === 5 ? selectedClass : hoverClass}
            >
              <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
