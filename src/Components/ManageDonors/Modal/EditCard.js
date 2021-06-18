import React from "react";
import {FaCreditCard} from 'react-icons/fa'
const EditProfile = ({ isEditCard, setIsEditCard }) => {
  return (
    <>
      <div className={isEditCard ? "modal show" : "modal"}>
        <div className="modal__box">
          <form className="modal__form">
            <div className="modal__box__header">
             <FaCreditCard />
              <h2>Edit Card</h2>
            </div>
            <div className="modal__box__body">
              <div className="modal__form__group">
                <label>Name on Card</label>
                <input type="text" name="modalCardName" placeholder="Name" />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>Card Number</label>
                <input
                  type="text"
                  name="modalCardNumber"
                  placeholder="1234 1234 1234 1234"
                />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>CVC</label>
                <input type="number" name="modalCardCVC" placeholder="CVC" />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>Expiration - Month</label>
                <input type="number" name="modalCardMonth" placeholder="MM" />
                <p className="error__msg">Required</p>
              </div>
              <div className="modal__form__group">
                <label>Expiration - Year</label>
                <input type="number" name="modalCardYear" placeholder="YY" />
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
                      setIsEditCard(false);
                    }}
                  >
                    Cancel
                  </button>
                </li>
                <li>
                  <button className="btn__process">
                    Save <i className="fa fa-spinner fa-spin"></i>
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
