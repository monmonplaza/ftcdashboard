import React from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import Spinner from "../../Spinner/Spinner";
const addChildModal = ({ isAddChild }) => {
  return (
    <div className={isAddChild ? "modal show" : "modal"}>
      <div className="modal__box">
        <form action="" className="modal__form">
          <div className="modal__box__header">
            <BsPersonPlusFill />
            <h2>Add New Child</h2>
          </div>
          <div className="modal__box__body">
            <div className="modal__form__group">
              <label>Name</label>
              <input type="text" name="modalChildName" />
              <p className="error__msg">Required</p>
            </div>

            <div className="modal__form__group">
              <label>Age</label>
              <input type="text" name="modalChildAge" />
              <p className="error__msg">Required</p>
            </div>

            <div className="modal__form__group">
              <label>Birthday</label>
              <input type="text" name="modalChildBday" />
              <p className="error__msg">Required</p>
            </div>

            <div className="modal__form__group">
              <label>Classification</label>
              <select name="modalClass">
                <option value="resident">Resident</option>
                <option value="nonresident">Non-Resident</option>
              </select>
              <p className="error__msg">Required</p>
            </div>

            <div className="modal__form__group">
              <label>Story</label>
              <textarea name="modalStory" rows="20"></textarea>
              <p className="error__msg">Required</p>
            </div>
          </div>
          <div className="modal__box__footer">
            <ul>
              <li>
                <button className="btn__cancel" onClick={() => !isAddChild}>
                  Cancel
                </button>
              </li>
              <li>
                <button className="btn__process">
                  Add <Spinner />
                </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addChildModal;
