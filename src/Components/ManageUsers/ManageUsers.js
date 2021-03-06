import React from "react";
import ActiveUser from "./ActiveUser";
import InactiveUser from "./InactiveUser";
import AddUser from "./Modal/AddUser";

const ManageUsers = ({ title }) => {
  const [isUserActive, setIsUserActive] = React.useState(true);
  const [isUserInactive, setIsUserInactive] = React.useState(false);

  const [isAddUser, setIsAddUser] = React.useState(false);

  const handleAddUser = () => setIsAddUser(!isAddUser);

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
                      isUserActive
                        ? "table__nav__btn active"
                        : "table__nav__btn"
                    }
                    onClick={() => {
                      setIsUserActive(true);
                      setIsUserInactive(false);
                    }}
                  >
                    Active
                  </button>
                </li>
                <li>
                  <button
                    className={
                      isUserInactive
                        ? "table__nav__btn active"
                        : "table__nav__btn"
                    }
                    onClick={() => {
                      setIsUserActive(false);
                      setIsUserInactive(true);
                    }}
                  >
                    Inactive
                  </button>
                </li>
              </ul>
              <button className="action__btn" onClick={handleAddUser}>
                +Add New User
              </button>
            </div>
          </div>

          <div className="table__content active">
            <div className="table__content__item">
              <div className="table__content__responsive">
                {isUserActive && <ActiveUser />}
                {isUserInactive && <InactiveUser />}
              </div>
            </div>
          </div>
        </div>
        <AddUser isAddUser={isAddUser} setIsAddUser={setIsAddUser} />
      </main>
    </>
  );
};

export default ManageUsers;
