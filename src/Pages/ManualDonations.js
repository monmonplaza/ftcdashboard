import React from "react";
import Header from "../Components/Header/Header";
import ManageManualDonations from "../Components/ManageManualDonations/ManageManualDonations";
import SideMenu from "../Components/SideMenu/SideMenu";
const ManualDonations = () => {
  return (
    <>
      <Header />
      <section className="main__grid">
        <SideMenu />
        <ManageManualDonations title="Manual Donations" />
      </section>
    </>
  );
};

export default ManualDonations;
