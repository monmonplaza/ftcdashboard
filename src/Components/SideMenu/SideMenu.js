import React from "react";
import { Link } from "react-router-dom";
import { MenuData } from "../DataJSON/MenuData";

const index = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__wrapper">
          <ul>
            <li>
              <Link to="/">
                <i className="fal fa-home"></i>
                <span> Overview</span>
              </Link>
            </li>
            {MenuData.map((menu) => {
              return (
                <li key={menu.id}>
                  <Link to={menu.path}>
                    <i className={menu.icon}></i>
                    <span> {menu.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default index;
