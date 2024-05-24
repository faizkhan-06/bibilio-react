import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isSearchBtn, setIsSearchBtn] = useState(false);

  const toggleSearch = () => {
    setIsSearchBtn((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <div className="grid grid-cols-3 py-5 items-center">
          <div className="text-sm">
            <ul className="flex gap-8 justify-center items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-semibold-dot" : "text-white"
                }
              >
                Home
              </NavLink>
              <li>
                <a href="#shop">Shop</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <span className="logo font-bold text-lg">BIBILIO</span>
          </div>
          <div className="flex justify-center gap-10 items-center">
            <span>
              <form
                action="#"
                className={`${isSearchBtn ? "show-search" : ""} search`}
                id="search-bar"
              >
                <input
                  type="search"
                  placeholder="Type something..."
                  className="search-inp"
                />
                <div
                  className="search-btn"
                  id="search-btn"
                  onClick={toggleSearch}
                >
                  {!isSearchBtn ? (
                    <ion-icon
                      name="search-outline"
                      className="search-icon"
                    ></ion-icon>
                  ) : (
                    <ion-icon
                      name="close-outline"
                      className="close-icon"
                    ></ion-icon>
                  )}
                </div>
              </form>
            </span>
            <span>
              <ion-icon name="heart-outline"></ion-icon>
            </span>
            <span>
              <ion-icon name="bag-outline"></ion-icon>
            </span>
            <span>
              <ion-icon name="person-outline"></ion-icon>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
