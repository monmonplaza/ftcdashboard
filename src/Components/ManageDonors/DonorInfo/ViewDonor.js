import React from "react";
import Profile from "./Profile";
const Details = ({ title }) => {
  const [isDetail, setIsDetail] = React.useState(true);
  const [isSponsorship, setIsSponsorship] = React.useState(false);
  const [isCancelSponsorship, setIsCancelSponsorship] = React.useState(false);
  const [isManual, setIsManual] = React.useState(false);
  return (
    <main>
      <div className="main__wrapper">
        <h2>{title}</h2>
        <div className="table__nav">
          <div className="table__nav__wrapper">
            <ul className="table__nav__list">
              <li className="table__nav__listitem">
                <button
                  className={
                    isDetail ? "table__nav__btn active" : "table__nav__btn"
                  }
                  onClick={() => {
                    setIsDetail(true);
                    setIsSponsorship(false);
                    setIsCancelSponsorship(false);
                    setIsManual(false);
                  }}
                >
                  Details
                </button>
              </li>
              <li>
                <button
                  className={
                    isSponsorship ? "table__nav__btn active" : "table__nav__btn"
                  }
                  onClick={() => {
                    setIsDetail(false);
                    setIsSponsorship(true);
                    setIsCancelSponsorship(false);
                    setIsManual(false);
                  }}
                >
                  Sponsorship
                </button>
              </li>

              <li>
                <button
                  className={
                    isCancelSponsorship
                      ? "table__nav__btn active"
                      : "table__nav__btn"
                  }
                  onClick={() => {
                    setIsDetail(false);
                    setIsSponsorship(false);
                    setIsCancelSponsorship(true);
                    setIsManual(false);
                  }}
                >
                  Canceled Sponsorship
                </button>
              </li>

              <li>
                <button
                  className={
                    isManual ? "table__nav__btn active" : "table__nav__btn"
                  }
                  onClick={() => {
                    setIsDetail(false);
                    setIsSponsorship(false);
                    setIsCancelSponsorship(false);
                    setIsManual(true);
                  }}
                >
                  Manual Donation
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="table__content active">
          <div className="table__content__item">
            <div className="table__content__responsive">
              {/* {isDonorActive && <ActiveDonor />}
              {isDonorInactive && <InactiveDonor />} */}
            </div>
          </div>
        </div>
        <Profile />
      </div>
    </main>
  );
};

export default Details;
