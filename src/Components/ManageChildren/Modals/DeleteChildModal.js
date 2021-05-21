import React from "react";
import { BsPersonPlusFill } from "react-icons/bs";
const DeleteChildModal = ({ addChild }) => {
  return (
    <div className={addChild ? "modal show" : "modal"}>
      <div className="modal__box">
        <form action="" className="modal__form">
          <div className="modal__box__header">
            <BsPersonPlusFill />
            <h2>Delete Child?</h2>
          </div>
          <div className="modal__box__body">
            <div className="modal__form__group">
              <h3>Are you sure you want to remove this child</h3>
            </div>
          </div>
          <div className="modal__box__footer">
            <ul>
              <li>
                <button className="btn__cancel" onClick={() => !addChild}>
                  Cancel
                </button>
              </li>
              <li>
                <button className="btn__process">
                  Confirm <i className="fa fa-spin"></i>
                </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteChildModal;
