import React from "react";
import ManageDonationDesignation from "../Components/ManageDonationDesignation/ManageDonationDesignation";
import SideMenu from "../Components/SideMenu/SideMenu";
import Header from "../Components/Header/Header";
const DonationDesignation = () => {
  return (
    <>
      <Header />
      <section className="main__grid">
        <SideMenu />
        <ManageDonationDesignation title="Donation Designation" />
      </section>
    </>
  );
};

export default DonationDesignation;
