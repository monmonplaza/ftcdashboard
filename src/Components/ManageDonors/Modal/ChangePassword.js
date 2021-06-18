import React from "react";
import {RiLockPasswordFill} from 'react-icons/ri';

const ChangePassword = ({isChangePassword,setIsChangePassword}) => {
  return (
    <>
        <div className={isChangePassword ? "modal show" : "modal"}>
        <div className="modal__box">
          <form className="modal__form">
            <div className="modal__box__header">
            <RiLockPasswordFill />
              <h2>Reset Password</h2>
            </div>
            <div className="modal__box__body">
              <div className="modal__form__group">
               <p>This will send email to a Donor to reset a password.</p>
              </div>
            </div>
            <div className="modal__box__footer">
              <ul>
                <li>
                  <button
                    type="reset"
                    className="btn__cancel"
                    onClick={() => {
                      setIsChangePassword(false);
                    }}
                  >
                    Cancel
                  </button>
                </li>
                <li>
                  <button className="btn__alert">
                    Reset <i className="fa fa-spinner fa-spin"></i>
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

export default ChangePassword;
