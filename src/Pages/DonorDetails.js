import React from "react";
import ViewDonor from "../Components/ManageDonors/DonorInfo/ViewDonor";
import SideMenu from "../Components/SideMenu/SideMenu";
import Header from "../Components/Header/Header";

const DonorDetails = () => {
  return (
    <>
      <Header />
      <section className="main__grid">
        <SideMenu />
        <ViewDonor title="Donors" />
      </section>
    </>
  );
};

export default DonorDetails;
