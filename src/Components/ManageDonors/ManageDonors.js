import React from "react";
import ActiveDonor from "./ActiveDonors";
import InactiveDonor from "./InactiveDonors";
import CancelledSponsor from "./DonorInfo/CancelledSponsor";
import ManualDonation from "./DonorInfo/ManualDonation";
import Details from "./DonorInfo/ViewDonor";
import Sponsorship from "./DonorInfo/Sponsorship";
const ManageDonors = ({ title }) => {
  const [isDonorActive, setIsDonorActive] = React.useState(true);
  const [isDonorInactive, setIsDonorInactive] = React.useState(false);

  return (
    <main>
      <div className="main__wrapper">
        <h2>{title}</h2>
        <div className="table__nav">
          <div className="table__nav__wrapper">
            <ul className="table__nav__list">
              <li className="table__nav__listitem">
                <button
                  className={
                    isDonorActive ? "table__nav__btn active" : "table__nav__btn"
                  }
                  onClick={() => {
                    setIsDonorActive(true);
                    setIsDonorInactive(false);
                  }}
                >
                  Active
                </button>
              </li>
              <li>
                <button
                  className={
                    isDonorInactive
                      ? "table__nav__btn active"
                      : "table__nav__btn"
                  }
                  onClick={() => {
                    setIsDonorActive(false);
                    setIsDonorInactive(true);
                  }}
                >
                  Inactive
                </button>
              </li>
            </ul>
            <button className="action__btn">+Add New User</button>
          </div>
        </div>

        <div className="table__content active">
          <div className="table__content__item">
            <div className="table__content__responsive">
              {isDonorActive && <ActiveDonor />}
              {isDonorInactive && <InactiveDonor />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageDonors;
