import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { axios } from "../../axiosConfig";

export default function Navbar({ setloggedIn, loggedIn }) {
  let [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/check-auth").then((res) => {
      console.log(res.data);
      setUsername(res.data.user.username);
    });
  }, [loggedIn]);

  function handleLogout() {
    axios.get("/logout").then((res) => {
      if (res.data.success) {
        setloggedIn(false);
        setUsername("");
        navigate("/");
      }
    });
  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary px-5">
      <div class="container-fluid p-2 px-5">
        <Link class="navbar-brand" to="/">
          <img src="assets/logo.svg" width={"200px"}></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto gap-3 align-items-center">
            <li class="nav-item">
              <Link class="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/support">
                Support
              </Link>
            </li>
            {loggedIn ? (
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-user"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <div class="dropdown-item" href="#">
                      <span
                        style={{
                          backgroundColor: "#387ed1",
                          color: "white",
                          padding: "0.25rem 0.5rem",
                          borderRadius: "50%",
                          marginRight: "1rem",
                        }}
                      >
                        {username[0]}
                      </span>
                      <span>{username}</span>
                    </div>
                  </li>
                  <li>
                    <div
                      class="dropdown-item"
                      href="#"
                      onClick={handleLogout}
                      style={{ cursor: "pointer" }}
                    >
                      <span
                        style={{
                          padding: "0 0.5rem",
                          color: "red",
                          borderRadius: "50%",
                          marginRight: "1rem",
                        }}
                      >
                        <i class="fa-solid fa-right-from-bracket"></i>
                      </span>
                      <span>Logout</span>
                    </div>
                  </li>
                </ul>
              </li>
            ) : (
              <Link class="nav-link" to="/login">
                <button className="btn btn-success">
                  
                  <i class="fa-solid fa-right-to-bracket"></i> Login
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
