import React from "react";
import Header from "../Components/Header/Header";
import SideMenu from "../Components/SideMenu/SideMenu";
import ManageOverview from "../Components/ManageOverview/ManageOverview";

const Overview = ({ title }) => {
  return (
    <>
      <Header />
      <section className="main__grid">
        <SideMenu />
        <ManageOverview title="Overview" />
      </section>
    </>
  );
};

export default Overview;
