import React from 'react'

const ArchiveDonor = ({isArchiveDonor, setIsArchiveDonor}) => {
    return (
        <div>

             <div className={isArchiveDonor ? "modal show" : "modal"}>
        <div className="modal__box">
          <form className="modal__form">
            <div className="modal__box__header">
              <h2>Archive Donor</h2>
            </div>
            <div className="modal__box__body">
              <div className="modal__form__group">
               <p>This action will remove the Donor from the list and become inactive.</p>
              </div>
            </div>
            <div className="modal__box__footer">
              <ul>
                <li>
                  <button
                    type="reset"
                    className="btn__cancel"
                    onClick={() => {
                      setIsArchiveDonor(false);
                    }}
                  >
                    Cancel
                  </button>
                </li>
                <li>
                  <button className="btn__process">
                    Archive <i className="fa fa-spinner fa-spin"></i>
                  </button>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
            
        </div>
    )
}

export default ArchiveDonor
