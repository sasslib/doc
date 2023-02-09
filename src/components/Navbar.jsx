import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ title, items = [] }) {
  return (
    <nav className="navbar--red text--white mb-4">
      <div className="container">
        <h2 className="site--title">{title}</h2>
        <label className="navbar--mobile--btn" htmlFor="navbar--input">
          Menu
        </label>
        <input
          type="checkbox"
          name="navbar--input"
          id="navbar--input"
          className="navbar--mobile--checked"
        />
        <ul className="items">
          {items.map((item, index) => (
            <li className="item" key={index}>
              <Link to={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
