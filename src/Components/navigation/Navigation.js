import React from "react";

const Navigation = ({ navigation }) => (
  <nav>
    <ul>
      {navigation.map(({ path, name }) => (
        <li key={path}>
          <a href={path}>{name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
