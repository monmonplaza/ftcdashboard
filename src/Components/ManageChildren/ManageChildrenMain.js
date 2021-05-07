import React from "react";
import NonResident from "./NonResident";

import Resident from "./Resident";

const ManageChildrenMain = ({ title }) => {
  const [isResident, setIsResident] = React.useState(true);
  const [isNonResident, setIsNonResident] = React.useState(false);

  const handleNonResident = () => {
    console.log("non-resident");
    setIsResident(false);
    setIsNonResident(true);
  };
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
                      isResident ? "table__nav__btn active" : "table__nav__btn"
                    }
                    onClick={() => {
                      setIsResident(true);
                      setIsNonResident(false);
                    }}
                  >
                    Resident
                  </button>
                </li>
                <li>
                  <button
                    className={
                      isNonResident
                        ? "table__nav__btn active"
                        : "table__nav__btn"
                    }
                    onClick={handleNonResident}
                  >
                    non-Resident
                  </button>
                </li>
              </ul>
              <button className="action__btn">+Add New Child</button>
            </div>
          </div>

          <div className="table__content active">
            <div className="table__content__item">
              <div className="table__content__responsive">
                {isResident && <Resident />}
                {isNonResident && <NonResident />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ManageChildrenMain;
