import React from "react";
import { FaUserEdit } from "react-icons/fa";
const EditChildModal = ({ isEditChild, setIsEditChild }) => {
  return (
    <div className={isEditChild ? "modal show" : "modal"}>
      <div className="modal__box">
        <form className="modal__form">
          <div className="modal__box__header">
            <FaUserEdit />
            <h2>Edit Child</h2>
          </div>
          <div className="modal__box__body">
            <div className="form-group add__photo">
              {/* <img src="../images/icon-addImg.svg" class="uploadImg" alt="" /> */}
              <img
                src="https://static.wikia.nocookie.net/mobile-legends/images/6/66/Zilong.png"
                className="uploadImg"
                alt=""
              />
              <div className="uploadBtn">
                Change Photo
                <input type="file" className="hide__file" />
              </div>

              <p className="error__msg">
                Lorem ipsum, dolor sit amet consectetur adipisicing
              </p>
            </div>

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
                <button
                  type="reset"
                  className="btn__cancel"
                  onClick={() => {
                    setIsEditChild(false);
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
  );
};

export default EditChildModal;
