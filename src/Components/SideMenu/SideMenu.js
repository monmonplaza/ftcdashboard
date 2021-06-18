import React from "react";
import { Link } from "react-router-dom";
import { MenuData } from "../DataJSON/MenuData";

const SideMenu = () => {
  // const [activeLink, setActiveLink] = React.useState(false)

  const handleActiveLink = () => {
    let links = document.querySelectorAll(".sidebar__link");

    links.forEach((link) => {
      link.classList.remove("active");
    });
  };

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
                <li key={menu.id} onClick={handleActiveLink}>
                  <Link
                    to={menu.path}
                    // className={
                    //   activeLink ? "sidebar__link active" : "sidebar__link"
                    // }
                  >
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

export default SideMenu;
