import React from "react";
import Logo from "../../Images/ftc_logo_wht.svg";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <img src={Logo} alt="FBS logo" />
          <Link to="/">Login</Link>
        </div>
      </header>
    </>
  );
};

export default index;
