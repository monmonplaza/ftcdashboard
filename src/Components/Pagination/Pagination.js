import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="pagination">
        <div className="pagination__wrapper">
          <div className="pagination__grid">
            <div className="pagination__result">
              <p>
                Total Result: <span>5</span>
              </p>
            </div>
            <div className="pagination__nav">
              <ul>
                <li>
                  <button className="btn__prev" disabled>
                    Previous
                  </button>
                </li>
                <li>
                  <button className="btn__prev">Next</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
