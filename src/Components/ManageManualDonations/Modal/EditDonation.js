import React from "react";
import { FaUserEdit } from "react-icons/fa";
const EditDonation = ({ isEditDonation, setIsEditDonation }) => {
  return (
    <div className={isEditDonation ? "modal show" : "modal"}>
      <div className="modal__box">
        <form className="modal__form">
          <div className="modal__box__header">
            <FaUserEdit />
            <h2>Edit Donation</h2>
          </div>
          <div className="modal__box__body">
            <div className="modal__form__group">
              <label>Child Name</label>
              <input type="text" name="modalName" />
              <p className="error__msg">Required</p>
            </div>

            <div className="modal__form__group">
              <label>Amount</label>
              <input type="text" name="modalAmount" />
              <p className="error__msg">Required</p>
            </div>

            <div className="modal__form__group">
              <label>Start Date</label>
              <input type="date" name="modalStartDate" />
              <p className="error__msg">Required</p>
            </div>

            <div className="modal__form__group">
              <label>End Date</label>
              <input type="date" name="modalEndDate" />
              <p className="error__msg">Required</p>
            </div>
          </div>
          <div className="modal__box__footer">
            <ul>
              <li>
                <button
                  type="reset"
                  className="btn__cancel"
                  onClick={() => {
                    setIsEditDonation(false);
                  }}
                >
                  Cancel
                </button>
              </li>
              <li>
                <button className="btn__process">
                  Add <i className="fa fa-spinner fa-spin"></i>
                </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDonation;
