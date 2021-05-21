import React from "react";
import Header from "../Components/Header/Header";
import ManageDonors from "../Components/ManageDonors/ManageDonors";
import SideMenu from "../Components/SideMenu/SideMenu";
const DonorsList = () => {
  return (
    <>
      <Header />
      <section className="main__grid">
        <SideMenu />
        <ManageDonors title="Manage Donors" />
      </section>
    </>
  );
};

export default DonorsList;
