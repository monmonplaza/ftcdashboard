import React from "react";
import ManualDonationActive from "./ManualDonationActive";
import ManualDonationArchive from "./ManualDonationArchive";

const ManageManualDonations = ({ title }) => {
  const [isManualDonationActive, setIsManualDonationActive] =
    React.useState(true);
  const [isManualDonationArchive, setIsManualDonationArchive] =
    React.useState(false);

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
                    isManualDonationActive
                      ? "table__nav__btn active"
                      : "table__nav__btn"
                  }
                  onClick={() => {
                    setIsManualDonationActive(true);
                    setIsManualDonationArchive(false);
                  }}
                >
                  Active
                </button>
              </li>
              <li>
                <button
                  className={
                    isManualDonationArchive
                      ? "table__nav__btn active"
                      : "table__nav__btn"
                  }
                  onClick={() => {
                    setIsManualDonationActive(false);
                    setIsManualDonationArchive(true);
                  }}
                >
                  Archive
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="table__content active">
          <div className="table__content__item">
            <div className="table__content__responsive">
              {isManualDonationActive && <ManualDonationActive />}
              {isManualDonationArchive && <ManualDonationArchive />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageManualDonations;
