import React from "react";
import { MenuData } from "../DataJSON/MenuData";
import { Link } from "react-router-dom";

const ManageOverview = ({ title }) => {
  return (
    <main>
      <div className="main__wrapper">
        <h2>{title}</h2>
        <div className="menu__lists__grid">
          {MenuData.map((menu) => {
            return (
              <div className="menu__lists__grid__items" key={menu.id}>
                <div className="wrapper">
                  <i className={menu.icon}></i>
                  <h3>{menu.title}</h3>
                  <p>{menu.description}</p>
                </div>
                <Link to={menu.path}>{menu.linkName}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ManageOverview;
