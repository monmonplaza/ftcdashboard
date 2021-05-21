import React, { useState, useEffect } from "react";
import AddChildModal from "./Modals/AddChildModal";
import NonResident from "./NonResident";
import Resident from "./Resident";

const ManageChildren = ({ title }) => {
  const [TabActive, setTabActive] = useState(1);
  const tabTable = (index) => setTabActive(index);

  const [addChild, setAddChild] = useState(false);
  const handleAddChild = (e) => {
    e.preventDefault();
    setAddChild(!addChild);
  };

  // const [toggleOption, setToggleOption] = useState(false);
  // const handleToggleOption = () => setToggleOption(!toggleOption);

  // API data state
  // const [childrenList, setChildrenList] = useState([]);
  const [childListResident, setChildListResident] = useState([]);
  // const [childListNonResident, setChildListNonResident] = useState([]);

  // spinner state
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    let URL =
      "https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/rest/server/stripe/products/list-products.php";

    async function fetchChildResident() {
      let response = await fetch(URL);
      let children = await response.json();

      setChildListResident(children);
      setIsloading(false);
    }

    fetchChildResident();
  }, []);

  const handleNonResident = () => {
    tabTable(2);
    return (
      <NonResident
        isLoading={isLoading}
        childListResident={childListResident}
      />
    );
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
                      TabActive === 1
                        ? "table__nav__btn active"
                        : "table__nav__btn"
                    }
                    onClick={() => tabTable(1)}
                  >
                    Resident
                  </button>
                </li>
                <li>
                  <button
                    className={
                      TabActive === 2
                        ? "table__nav__btn active"
                        : "table__nav__btn"
                    }
                    onClick={handleNonResident}
                  >
                    non-Resident
                  </button>
                </li>
              </ul>
              <button className="action__btn" onClick={handleAddChild}>
                +Add New Child
              </button>
            </div>
          </div>

          <div
            className={
              TabActive === 1 ? "table__content active" : "table__content"
            }
          >
            <div className="table__content__item">
              <div className="table__content__responsive">
                <table>
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Birthday</td>
                      <td>Classification</td>
                      <td>Create</td>
                      <td>Action</td>
                    </tr>
                  </thead>

                  <tbody>
                    <Resident
                      isLoading={isLoading}
                      childListResident={childListResident}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            className={
              TabActive === 2 ? "table__content active" : "table__content"
            }
          >
            <div className="table__content__item">
              <div className="table__content__responsive">
                <table>
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Birthday</td>
                      <td>Classification</td>
                      <td>Create</td>
                      <td>Action</td>
                    </tr>
                  </thead>

                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AddChildModal isAddChild={addChild} />
    </>
  );
};

export default ManageChildren;
