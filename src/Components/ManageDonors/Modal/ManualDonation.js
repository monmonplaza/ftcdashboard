import React from "react";
import {FaHandsHelping} from 'react-icons/fa';

const ManualDonation = ({ isManual, setIsManual }) => {
  return (
    <>
      <div className={isManual ? "modal show" : "modal"}>
        <div className="modal__box">
          <form className="modal__form">
            <div className="modal__box__header">
            <FaHandsHelping />
              <h2>Manual Donation</h2>
            </div>
            <div className="modal__box__body">
              <div className="modal__form__group">
                <label>Select Child</label>
                <select name="" id="">
                  <option value="loverboy">Loverboy</option>
                  <option value="loverboy">Loverboy</option>
                  <option value="loverboy">Loverboy</option>
                  <option value="loverboy">Loverboy</option>
                  <option value="loverboy">Loverboy</option>
                </select>
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>Amount</label>
                <input
                  type="number"
                  name="modalDonationManual"
                  placeholder="$10.00"
                />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>Start Date</label>
                <input
                  type="date"
                  name="modalDonationStart"
                  placeholder="mm/dd/yyyy"
                />
                <p className="error__msg">Required</p>
              </div>

              <div className="modal__form__group">
                <label>End Date</label>
                <input
                  type="date"
                  name="modalDonationEnd"
                  placeholder="mm/dd/yyyy"
                />
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
                      setIsManual(false);
                    }}
                  >
                    Cancel
                  </button>
                </li>
                <li>
                  <button className="btn__process">
                    Process <i className="fa fa-spinner fa-spin"></i>
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

export default ManualDonation;
