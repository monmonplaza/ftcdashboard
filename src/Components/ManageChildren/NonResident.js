import React from "react";
import useFetchData from "../custom-hooks/useFetchData";
import TableLoader from "../TableLoader/TableLoader";
import DeleteChildModal from "./Modals/DeleteChildModal";
import EditChildModal from "./Modals/EditChildModal";
import ViewDonorModal from "./Modals/ViewDonorModal";

const NonResident = ({ action }) => {
  const { list, loading } = useFetchData(
    "https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/rest/server/stripe/products/list-products.php"
  );

  const [isDeleteChild, setIsDeleteChild] = React.useState(false);
  const [isEditChild, setIsEditChild] = React.useState(false);
  const [isViewDonor, setIsViewDonor] = React.useState(false);

  const handleDeleteChildModal = () => setIsDeleteChild(true);
  const handleEditChildModal = () => setIsEditChild(true);
  const handleViewDonorModal = () => setIsViewDonor(true);

  return (
    <>
      {loading && <TableLoader />}
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

        {Object.keys(list).length > 0 ? (
          <tbody>
            {list.data.map((item) => {
              if (item.metadata.class === "non-resident") {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.metadata.birthday}</td>
                    <td>{item.metadata.class}</td>
                    <td>1-20-2021</td>
                    <td>
                      <div className="table__option">
                        <div className="table__option__btn">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="table__option__list">
                          <li>
                            <button onClick={handleEditChildModal}>
                              Edit Child
                            </button>
                          </li>
                          <li>
                            <button onClick={handleViewDonorModal}>
                              View Donor
                            </button>
                          </li>
                          <li>
                            <button onClick={handleDeleteChildModal}>
                              Delete Child?
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        ) : (
          <tbody className="no__data">
            <tr>
              <td>
                <div className="no__data__wrapper">
                  <i className="fal fa-exclamation-triangle"></i>
                  <h3>No Data Available</h3>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>
      <ViewDonorModal
        isViewDonor={isViewDonor}
        setIsViewDonor={setIsViewDonor}
      />

      <EditChildModal
        isEditChild={isEditChild}
        setIsEditChild={setIsEditChild}
      />

      <DeleteChildModal
        isDeleteChild={isDeleteChild}
        setIsDeleteChild={setIsDeleteChild}
      />
    </>
  );
};

export default NonResident;
