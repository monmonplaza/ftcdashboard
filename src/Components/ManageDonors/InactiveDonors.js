import React from "react";
import useFetchData from "../custom-hooks/useFetchData";
import TableLoader from "../TableLoader/TableLoader";
import { Link } from "react-router-dom";
import ManualDonation from "./Modal/ManualDonation";
import ChangePassword from "./Modal/ChangePassword";
import ArchiveDonor from "./Modal/ArchiveDonor";

const InactiveDonors = () => {
  const { list, loading } = useFetchData(
    "https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/rest/server/stripe/products/list-products.php"
  );

  const [isManual, setIsManual] = React.useState(false);
  const [isChangePassword, setIsChangePassword] = React.useState(false);
  const [isArchiveDonor, setIsArchiveDonor] = React.useState(false);

  const handleSetIsManual = () => setIsManual(!isManual);
  const handleSetIsChangePassword = () => setIsChangePassword(!isChangePassword);
  const handleSetIsArchiveDonor = () => setIsArchiveDonor(!isArchiveDonor);


  return (
    <>
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
          {list.data.map((item, index) => {
            if (item.metadata.class === "resident") {
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
                            <Link to={"/donor-details"}>View Profile </Link>
                          </li>
                       <li>
                            <button onClick={handleSetIsManual}>
                              Manual Donation
                            </button>
                          </li>
                          <li>
                            <button onClick={handleSetIsChangePassword}>Change Password</button>
                          </li>
                          <li>
                            <button onClick={handleSetIsArchiveDonor}>Archive Donor</button>
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
      <ManualDonation isManual={isManual} setIsManual={setIsManual} />
      <ChangePassword isChangePassword={isChangePassword} setIsChangePassword={setIsChangePassword} />
      <ArchiveDonor isArchiveDonor={isArchiveDonor} setIsArchiveDonor={setIsArchiveDonor} />

    </>
  );
};

export default InactiveDonors;
