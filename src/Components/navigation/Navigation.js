import React from "react";

const Navigation = ({ navigation }) => {

  return (
    <nav>
      <ul>
        {navigation.map((item) => (
          <li key={item.path}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
