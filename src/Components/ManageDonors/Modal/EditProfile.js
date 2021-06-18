import React from "react";
import {FaUserEdit} from 'react-icons/fa';

const EditProfile = ({ isEditProfile, setIsEditProfile }) => {
  return (
    <>
      <div className={isEditProfile ? "modal show" : "modal"}>
        <div className="modal__box">
          <form className="modal__form">
            <div className="modal__box__header">
            <FaUserEdit />
              <h2>Edit Profile</h2>
            </div>
            <div className="modal__box__body">
              <div className="modal__form__group">
                <label>Name</label>
                <input type="text" name="modalProfileName" />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>Email</label>
                <input type="text" name="modalProfileEmail" />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>Tel</label>
                <input type="tel" name="modalProfileEmail" />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>Email</label>
                <input type="text" name="modalProfileEmail" />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>Address Line</label>
                <input type="text" name="modalProfileAddress1" />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>City</label>
                <input type="text" name="modalProfileCity" />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>State</label>
                <input type="text" name="modalProfileState" />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>Postal Code</label>
                <input type="number" name="modalProfilePostal" />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>Country</label>
                <input type="text" name="modalProfileCountry" />
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
                      setIsEditProfile(false);
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
    </>
  );
};

export default EditProfile;
