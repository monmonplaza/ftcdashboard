import React from "react";
import NonResident from "./NonResident";
import Resident from "./Resident";
import AddChildModal from "./Modals/AddChildModal";
import Pagination from "../Pagination/Pagination";

const ManageChildrenMain = ({ title }) => {
  const [isResident, setIsResident] = React.useState(true);
  const [isNonResident, setIsNonResident] = React.useState(false);

  const [isAddChild, setIsAddChild] = React.useState(false);

  const handleNonResident = () => {
    setIsResident(false);
    setIsNonResident(true);
  };

  const handleAddChildModal = () => {
    setIsAddChild(true);
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
              <button className="action__btn" onClick={handleAddChildModal}>
                +Add New Child
              </button>
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
          <Pagination />
        </div>
      </main>

      <AddChildModal isAddChild={isAddChild} setIsAddChild={setIsAddChild} />
    </>
  );
};

export default ManageChildrenMain;
