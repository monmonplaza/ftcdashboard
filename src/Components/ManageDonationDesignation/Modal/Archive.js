import React from "react";

const Archive = ({ isArchive, setIsArchive }) => {
  return (
    <>
      <div className={isArchive ? "modal show" : "modal"}>
        <div className="modal__box">
          <form className="modal__form">
            <div className="modal__box__header">
              <h2>Archive Donation</h2>
            </div>
            <div className="modal__box__body">
              <p>Are you sure you want to archive ?</p>
            </div>
            <div className="modal__box__footer">
              <ul>
                <li>
                  <button
                    type="reset"
                    className="btn__cancel"
                    onClick={() => {
                      setIsArchive(false);
                    }}
                  >
                    Cancel
                  </button>
                </li>
                <li>
                  <button className="btn__alert">
                    Archive <i className="fa fa-spinner fa-spin"></i>
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

export default Archive;
