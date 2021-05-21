import React from "react";
import Header from "../Components/Header/Header";
import ManageUsers from "../Components/ManageUsers/ManageUsers";
import SideMenu from "../Components/SideMenu/SideMenu";

const index = () => {
  return (
    <>
      <Header />
      <section className="main__grid">
        <SideMenu />
        <ManageUsers title="User List" />
      </section>
    </>
  );
};

export default index;
