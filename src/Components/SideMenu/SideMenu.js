import React from "react";
import { Link } from "react-router-dom";
import { VscHome, VscAccount, VscPerson } from "react-icons/vsc";
import { BsGift } from "react-icons/bs";
const index = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__wrapper">
          <ul>
            <li>
              <Link to="/">
                <VscHome />
                <span> Overview</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <VscAccount /> <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <VscPerson />
                <span> Children</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsGift />
                <span> Donors</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                <BsGift />
                <span>Donation Designation</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                <BsGift />
                Manual Donations
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default index;
