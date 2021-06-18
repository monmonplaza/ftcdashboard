import React from "react";

const AddUser = ({ isAddUser, setIsAddUser }) => {
  return (
    <>
      <div className={isAddUser ? "modal show" : "modal"}>
        <div className="modal__box">
          <form className="modal__form">
            <div className="modal__box__header">
              <h2>Suspend</h2>
            </div>
            <div className="modal__box__body">
              <div className="modal__form__group">
                <label>Name</label>
                <input type="text" name="username" placeholder="" />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>Email</label>
                <input type="email" name="useremail" placeholder="" />
                <p className="error__msg">Required</p>
              </div>

              <div className="reset_wrapper">
                <div className="modal__form__group">
                  <label>Dafault Password</label>
                  <input
                    type="text"
                    name="modalResetPassword"
                    placeholder="fvcxas"
                  />
                </div>
                <button className="btn__orange">Generate</button>
              </div>
            </div>
            <div className="modal__box__footer">
              <ul>
                <li>
                  <button
                    type="reset"
                    className="btn__cancel"
                    onClick={() => {
                      setIsAddUser(false);
                    }}
                  >
                    Cancel
                  </button>
                </li>
                <li>
                  <button className="btn__process">
                    Add User <i className="fa fa-spinner fa-spin"></i>
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

export default AddUser;
