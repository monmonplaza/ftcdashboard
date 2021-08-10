import React from "react";
import { MenuData } from "../DataJSON/MenuData";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="mobile">
      <div className="mobile__responsive">
        <ul className="mobile__list">
          {MenuData.map((menu) => {
            return (
              <li key={menu.id} className="mobile__listitem">
                <Link to={menu.path}>
                  <i className={menu.icon}></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default MobileMenu;
