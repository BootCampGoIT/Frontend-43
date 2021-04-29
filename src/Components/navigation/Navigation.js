import React from "react";
import {
  navigationList,
  navigationListItem,
  navigationLink,
  burger,
} from "./Navigation.module.css";
// import sprite from "../../icons/navigation/icons.svg";
// import sprite from "../../index.module.css";

const Navigation = ({ navigation }) => (
  <nav>
    {/* <svg className={burger}>
      <use href={sprite + "#icon-menu3"} />
    </svg> */}
    <ul className={navigationList}>
      {navigation.map(({ path, name }) => (
        <li key={path} className={navigationListItem}>
          <a href={path} className={`link ${navigationLink}`}>
            {name}
          </a>
        </li>
      ))}
      <li>
        <button className='button'>LOGOUT</button>
      </li>
    </ul>
  </nav>
);

export default Navigation;
