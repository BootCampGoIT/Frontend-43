import React from "react";
import Navigation from "../navigation/Navigation";

const mainNavigation = [
  { path: "/", name: "Home" },
  { path: "/products", name: "Products" },
  { path: "/cart", name: "Cart" },
  { path: "/register", name: "Registration" },
  { path: "/login", name: "Login" },
];

const Header = () => {
  return (
    <header>
      <a href='/'>Logo</a>
      <Navigation navigation={mainNavigation} />
    </header>
  );
};

export default Header;
