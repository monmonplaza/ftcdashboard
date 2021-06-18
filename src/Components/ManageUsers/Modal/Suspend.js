import React from "react";

const Suspend = ({ isSuspend, setIsSuspend }) => {
  return (
    <>
      <div className={isSuspend ? "modal show" : "modal"}>
        <div className="modal__box">
          <form className="modal__form">
            <div className="modal__box__header">
              <h2>Suspend</h2>
            </div>
            <div className="modal__box__body">
              <div className="modal__form__group">
                <p>
                  This action will remove the user from the list and become
                  inactive.
                </p>
              </div>
            </div>
            <div className="modal__box__footer">
              <ul>
                <li>
                  <button
                    type="reset"
                    className="btn__cancel"
                    onClick={() => {
                      setIsSuspend(false);
                    }}
                  >
                    Cancel
                  </button>
                </li>
                <li>
                  <button className="btn__alert">
                    Suspend <i className="fa fa-spinner fa-spin"></i>
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

export default Suspend;
