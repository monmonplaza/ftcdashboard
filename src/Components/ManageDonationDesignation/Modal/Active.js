import React from "react";

const Active = ({ setIsActive, isActive }) => {
  return (
    <>
      <div className={isActive ? "modal show" : "modal"}>
        <div className="modal__box">
          <form className="modal__form">
            <div className="modal__box__header">
              <h2>Active Donation</h2>
            </div>
            <div className="modal__box__body">
              <p>Are you sure you want this donation actived?</p>
            </div>
            <div className="modal__box__footer">
              <ul>
                <li>
                  <button
                    type="reset"
                    className="btn__cancel"
                    onClick={() => {
                      setIsActive(false);
                    }}
                  >
                    Cancel
                  </button>
                </li>
                <li>
                  <button className="btn__process">
                    Active <i className="fa fa-spinner fa-spin"></i>
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

export default Active;
