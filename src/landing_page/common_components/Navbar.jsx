import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
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
          <ul class="navbar-nav ms-auto gap-3">
            <li class="nav-item">
              <Link class="nav-link" to="/signup">
                Signup
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
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-bars"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
