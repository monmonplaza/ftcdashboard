import React from "react";
import useFetchData from "../custom-hooks/useFetchData";
import TableLoader from "../TableLoader/TableLoader";

const NonResident = ({ action }) => {
  const { list, loading } = useFetchData(
    "https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/rest/server/stripe/products/list-products.php"
  );

  return (
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
      {loading && <TableLoader />}
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
                          <button>View Donor</button>
                        </li>
                        <li>
                          <button>Edit Child</button>
                        </li>
                        <li>
                          <button>Delete Child?</button>
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
  );
};

export default NonResident;
