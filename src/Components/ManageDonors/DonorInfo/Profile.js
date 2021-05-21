import React from "react";

const Details = ({ title }) => {
  const [isDetail, setIsDetail] = React.useState(true);
  const [isSponsorship, setIsSponsorship] = React.useState(false);
  const [isCancelSponsorship, setIsCancelSponsorship] = React.useState(false);
  const [isManual, setIsManual] = React.useState(false);
  return (
    <>
      <div className="donor">
        <div className="donor__block">
          <div className="donor__block__header">
            <h2>Profile Info</h2>
            <button>Edit</button>
          </div>
          <div className="donor__block__body">
            <div className="info__block">
              <h3>Name</h3>
              <p>Monmon Plaza</p>
            </div>

            <div className="info__block">
              <h3>Email</h3>
              <p>monmon.plaza@gmail</p>
            </div>

            <div className="info__block">
              <h3>Phone</h3>
              <p>0929 9210 291 </p>
            </div>
          </div>
        </div>

        <div className="donor__block">
          <div className="donor__block__header">
            <h2>Address Info</h2>
          </div>
          <div className="donor__block__body">
            <div className="info__block">
              <h3>Address Line 1</h3>
              <p>123 Morrow St</p>
            </div>

            <div className="info__block">
              <h3>City</h3>
              <p>Somonauk</p>
            </div>

            <div className="info__block">
              <h3>State</h3>
              <p>IL </p>
            </div>

            <div className="info__block">
              <h3>Postal Code</h3>
              <p>60552 </p>
            </div>

            <div className="info__block">
              <h3>Country</h3>
              <p>United States </p>
            </div>
          </div>
        </div>

        <div className="donor__block">
          <div className="donor__block__header">
            <h2>Card Info</h2>
            <button>Edit</button>
          </div>

          <div className="donor__block__body">
            <div className="creditcard__wrapper">
              <div className="creditcard__wrapper__name">
                <h3>Ramon PLaza</h3>
                <h3>XXXX XXXX XXXX 1234</h3>
              </div>
              <div className="creditcard__wrapper__validity">
                <div className="valid">
                  <h4>Valid Thru</h4>
                  <p>1/20/21</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/icon_cards.png`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
