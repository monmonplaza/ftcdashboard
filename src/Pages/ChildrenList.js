import React from "react";
import Header from "../Components/Header/Header";
import ManageChildrenMain from "../Components/ManageChildren/ManageChildrenMain";
import SideMenu from "../Components/SideMenu/SideMenu";

const index = () => {
  return (
    <>
      <Header />
      <section className="main__grid">
        <SideMenu />
        <ManageChildrenMain title="Manage Children" />
      </section>
    </>
  );
};

export default index;
