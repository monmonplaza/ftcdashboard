import React from "react";
import useFetchData from "../custom-hooks/useFetchData";
import TableLoader from "../TableLoader/TableLoader";

const Resident = () => {
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
            if (item.metadata.class === "resident") {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td></td>
                  <td>{item.metadata.class}</td>
                  <td>1-20-2021</td>
                  <td className="table__option">
                    <button
                      className="table__option__btn"
                      // onClick={() => console.log(list)}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                    <ul className="table__option__list">
                      <li>
                        <button>View</button>
                      </li>
                      <li>
                        <button>Edit</button>
                      </li>
                      <li>
                        <button>Delete</button>
                      </li>
                    </ul>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      ) : (
        <tbody>
          <tr>
            <td>no data</td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default Resident;
