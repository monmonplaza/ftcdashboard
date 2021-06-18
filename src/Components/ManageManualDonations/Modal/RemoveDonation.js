import React from "react";
import { GoStop } from "react-icons/go";
const RemoveDonation = ({ isRemoveDonation, setIsRemoveDonation }) => {
  return (
    <>
      <div className={isRemoveDonation ? "modal show" : "modal"}>
        <div className="modal__box">
          <form className="modal__form">
            <div className="modal__box__header">
              <GoStop />
              <h2>Stop Donation</h2>
            </div>
            <div className="modal__box__body">
              <p>Are you sure you want to stop donating?</p>
            </div>
            <div className="modal__box__footer">
              <ul>
                <li>
                  <button
                    type="reset"
                    className="btn__cancel"
                    onClick={() => {
                      setIsRemoveDonation(false);
                    }}
                  >
                    Cancel
                  </button>
                </li>
                <li>
                  <button className="btn__alert">
                    Stop <i className="fa fa-spinner fa-spin"></i>
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

export default RemoveDonation;
