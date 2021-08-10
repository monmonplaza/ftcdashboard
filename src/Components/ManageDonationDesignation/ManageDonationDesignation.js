import React from "react";
import DonationDesignationActive from "./DonationDesignationActive";
import DonationDesignationArchive from "./DonationDesignationArchive";
import Pagination from "../Pagination/Pagination";

const ManageDonationDesignation = ({ title }) => {
  const [isDonationDesignationActive, setIsDonationDesignationActive] =
    React.useState(true);
  const [isDonationDesignationArchive, setIsDonationDesignationArchive] =
    React.useState(false);

  return (
    <>
      <main>
        <div className="main__wrapper">
          <h2>{title}</h2>
          <div className="table__nav">
            <div className="table__nav__wrapper">
              <ul className="table__nav__list">
                <li className="table__nav__listitem">
                  <button
                    className={
                      isDonationDesignationActive
                        ? "table__nav__btn active"
                        : "table__nav__btn"
                    }
                    onClick={() => {
                      setIsDonationDesignationActive(true);
                      setIsDonationDesignationArchive(false);
                    }}
                  >
                    Active
                  </button>
                </li>
                <li>
                  <button
                    className={
                      isDonationDesignationArchive
                        ? "table__nav__btn active"
                        : "table__nav__btn"
                    }
                    onClick={() => {
                      setIsDonationDesignationActive(false);
                      setIsDonationDesignationArchive(true);
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
                {isDonationDesignationActive && <DonationDesignationActive />}
                {isDonationDesignationArchive && <DonationDesignationArchive />}
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </main>
    </>
  );
};

export default ManageDonationDesignation;
