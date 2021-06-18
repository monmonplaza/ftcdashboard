import React from "react";
import useFetchData from "../custom-hooks/useFetchData";
import TableLoader from "../TableLoader/TableLoader";
import EditDonation from "./Modal/EditDonation";
import RemoveDonation from "./Modal/RemoveDonation";
import Pagination from "../Pagination/Pagination";
const ManualDonationActive = () => {
  const { list, loading } = useFetchData(
    "https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/rest/server/stripe/products/list-products.php"
  );

  const [isEditDonation, setIsEditDonation] = React.useState(false);
  const [isRemoveDonation, setIsRemoveDonation] = React.useState(false);

  const handleIsEditDonation = () => setIsEditDonation(!isEditDonation);
  const handleIsRemoveDonation = () => setIsRemoveDonation(!isRemoveDonation);
  return (
    <>
      {loading && <TableLoader />}
      <table>
        <thead>
          <tr>
            <td>Child Name</td>
            <td>Donor</td>
            <td>Amount</td>
            <td>Status</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>Action</td>
          </tr>
        </thead>

        {Object.keys(list).length > 0 ? (
          <tbody>
            {list.data.map((item, index) => {
              if (item.metadata.class === "resident") {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.metadata.birthday}</td>
                    <td>{item.metadata.class}</td>
                    <td>1-20-2021</td>
                    <td>1-20-2021</td>
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
                            <button onClick={handleIsEditDonation}>
                              Edit Donation
                            </button>
                          </li>
                          <li>
                            <button onClick={handleIsRemoveDonation}>
                              Remove Donation
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
      <EditDonation
        isEditDonation={isEditDonation}
        setIsEditDonation={setIsEditDonation}
      />
      <RemoveDonation
        isRemoveDonation={isRemoveDonation}
        setIsRemoveDonation={setIsRemoveDonation}
      />
      <Pagination />
    </>
  );
};

export default ManualDonationActive;
