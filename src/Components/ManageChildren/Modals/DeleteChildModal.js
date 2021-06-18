import React from "react";
import { BsPersonDashFill } from "react-icons/bs";
const DeleteChildModal = ({ isDeleteChild, setIsDeleteChild }) => {
  return (
    <div className={isDeleteChild ? "modal show" : "modal"}>
      <div className="modal__box">
        <form className="modal__form">
          <div className="modal__box__header">
            <BsPersonDashFill />
            <h2>Delete Child</h2>
          </div>
          <div className="modal__box__body">
            <div className="modal__form__group">
              <p>Are you sure you want to remove this child?</p>
            </div>
          </div>
          <div className="modal__box__footer">
            <ul>
              <li>
                <button
                  type="reset"
                  className="btn__cancel"
                  onClick={() => setIsDeleteChild(false)}
                >
                  Cancel
                </button>
              </li>
              <li>
                <button className="btn__alert">
                  Confirm <i className="fa fa-spinner fa-spin"></i>
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
