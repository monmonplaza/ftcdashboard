import React from "react";

const ResetPassword = ({ isReset, setIsReset }) => {
  return (
    <>
      <div className={isReset ? "modal show" : "modal"}>
        <div className="modal__box">
          <form className="modal__form">
            <div className="modal__box__header">
              <h2>Reset Password</h2>
            </div>
            <div className="modal__box__body">
              <div className="reset_wrapper">
                <div className="modal__form__group">
                  <label>Dafault Password</label>
                  <input
                    type="text"
                    name="modalResetPassword"
                    placeholder="fvcxas"
                  />
                </div>

                <button className="btn__process">Generate</button>
              </div>
            </div>
            <div className="modal__box__footer">
              <ul>
                <li>
                  <button
                    type="reset"
                    className="btn__cancel"
                    onClick={() => {
                      setIsReset(false);
                    }}
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

export default ResetPassword;
