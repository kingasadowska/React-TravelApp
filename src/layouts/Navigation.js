import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const list = [
  { name: "Home", path: "/", exact: true },
  { name: "Destinations", path: "/products" },
  { name: "Plan your trip", path: "/trips" },
  { name: "Feedback", path: "/feedback" },
  { name: "Contact us", path: "/contact"},
]

const Navigation = () => {

  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  ))

  return (
    <nav className="main">
      <ul>
        {menu}
      </ul>
    </nav>
  );
}

export default Navigation;