import React from "react";
import { IoPeopleCircle } from "react-icons/io5";

const ViewDonorModal = ({ isViewDonor, setIsViewDonor }) => {
  const [isCard, setIsCard] = React.useState(true);
  const [isManual, setIsManual] = React.useState(false);

  const handleCard = (e) => {
    e.preventDefault();
    setIsCard(true);
    setIsManual(false);
  };

  const handleManual = (e) => {
    e.preventDefault();
    setIsCard(false);
    setIsManual(true);
  };

  return (
    <>
      <div className={isViewDonor ? "modal show" : "modal"}>
        <div className="modal__box modal__wide">
          <form action="" className="modal__form">
            <div className="modal__box__header">
              <IoPeopleCircle />
              <h2>Donor List</h2>
            </div>
            <div className="modal__box__body">
              <div className="modal__nav__table">
                <ul>
                  <li>
                    <button
                      className={isCard ? "active" : ""}
                      onClick={handleCard}
                    >
                      Card
                    </button>
                  </li>
                  <li>
                    <button
                      className={isManual ? "active" : ""}
                      onClick={handleManual}
                    >
                      Manual
                    </button>
                  </li>
                </ul>
              </div>

              <div className="modal__responsive__table">
                <table
                  className={
                    isCard
                      ? "modal__table modal__table__card show"
                      : "modal__table modal__table__card"
                  }
                >
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Status</td>
                      <td>Create</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <a href="/">ramon plaza</a>
                      </td>
                      <td>ramon.plaza@gmail.com</td>
                      <td className="active__cell">
                        <span>Active</span>
                      </td>
                      <td>1-11-11</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/">ramon plaza</a>
                      </td>
                      <td>ramon.plaza@gmail.com</td>
                      <td className="active__cell">
                        <span>Active</span>
                      </td>
                      <td>1-11-11</td>
                    </tr>
                  </tbody>
                </table>

                <table
                  className={
                    isManual
                      ? "modal__table modal__table__manual show"
                      : "modal__table modal__table__manual"
                  }
                >
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Status</td>
                      <td>Create</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <a href="/">ramon plazamanual</a>
                      </td>
                      <td>ramon.plaza@gmail.com</td>
                      <td className="active__cell">
                        <span>Active</span>
                      </td>
                      <td>1-11-11</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/">ramon plaza</a>
                      </td>
                      <td>ramon.plaza@gmail.com</td>
                      <td className="active__cell">
                        <span>Active</span>
                      </td>
                      <td>1-11-11</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal__box__footer">
              <ul>
                <li>
                  <button
                    type="reset"
                    className="btn__cancel"
                    onClick={() => setIsViewDonor(false)}
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewDonorModal;
