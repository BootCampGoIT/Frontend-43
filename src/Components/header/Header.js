import React from "react";
import Navigation from "../navigation/Navigation";

const mainNavigation = [
  { path: "/", name: "Home" },
  { path: "/cars", name: "Cars" },
  // { path: "/cart", name: "Cart" },
  { path: "/register", name: "Registration" },
  { path: "/login", name: "Login" },
];

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        backgroundColor: "lightgray",
        padding: "0 40px",
      }}>
      <a
        href='/'
        style={{ textDecoration: "none", textTransform: "uppercase" }}>
        CARS
      </a>
      <Navigation navigation={mainNavigation} />
    </header>
  );
};

export default Header;
