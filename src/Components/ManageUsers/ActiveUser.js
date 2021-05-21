import React from "react";
import useFetchData from "../custom-hooks/useFetchData";
import TableLoader from "../TableLoader/TableLoader";
import { Link } from "react-router-dom";

const ActiveUser = () => {
  const { list, loading } = useFetchData(
    "https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/rest/admin/read-users.php"
  );
  return (
    <table>
      <thead>
        <tr>
          <td>Email</td>
          <td>Name</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      {loading && <TableLoader />}
      {Object.keys(list).length > 0 ? (
        <tbody>
          {list.data.map((item, index) => {
            if (item.users_active === "1") {
              return (
                <tr key={item.id}>
                  <td>{item.users_email}</td>
                  <td>{item.users_name}</td>
                  <td>Active</td>

                  <td>
                    <div className="table__option">
                      <div className="table__option__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <ul className="table__option__list">
                        <li>
                          <Link to={"/donor-details"}>View Donor </Link>
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

export default ActiveUser;
