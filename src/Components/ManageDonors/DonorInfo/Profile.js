import React from "react";
import EditProfile from "../Modal/EditProfile";
import EditCard from "../Modal/EditCard";
import AddCard from "../Modal/AddCard";
const Details = () => {
  const [isEditCard, setIsEditCard] = React.useState(false);
  const [isAddCard, setIsAddCard] = React.useState(false);
  const [isEditProfile, setIsEditProfile] = React.useState(false);

  const handleEditProfile = () => setIsEditProfile(!isEditProfile);
  const handleEditCard = () => setIsEditCard(!isEditCard);
  const handleAddCard = () => setIsAddCard(!isAddCard);

  return (
    <>
      <div className="donor">
        <div className="donor__block">
          <div className="donor__block__header">
            <h2>Profile Info</h2>
            <button onClick={handleEditProfile}>Edit</button>
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
            <button onClick={handleEditCard}>Edit</button>
          </div>

          <div className="donor__block__body">
            <div className="creditcard__wrapper">
              <button className="addCardInfo" onClick={handleAddCard}>
                +Add Card Info
              </button>
              <img
                className="card__chip"
                src="../../images/icon_chip.png"
                alt="CC Icons"
              />
              <div className="creditcard__wrapper__name">
                <h3 className="cardname">-- -- -- -- </h3>
                <h3 className="cardnumber">XXXX XXXX XXXX XXXX</h3>
              </div>
              <div className="creditcard__wrapper__validity">
                <div className="valid">
                  <h4>Valid Thru</h4>
                  <p>-/--/--</p>
                </div>
                <img src="../../images/icon_cards.png" alt="CC Cards" />
              </div>
            </div>

            <div className="creditcard__wrapper">
              <img
                className="card__chip"
                src="../../images/icon_chip.png"
                alt="CC Chip"
              />
              <div className="creditcard__wrapper__name">
                <h3 className="cardname">Ramon Plaza</h3>
                <h3 className="cardnumber">XXXX XXXX XXXX 1234</h3>
              </div>
              <div className="creditcard__wrapper__validity">
                <div className="valid">
                  <h4>Valid Thru</h4>
                  <p>1/20/21</p>
                </div>
                <img src="../../images/icon_cards.png" alt="CC Cards" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditProfile
        isEditProfile={isEditProfile}
        setIsEditProfile={setIsEditProfile}
      />

      <EditCard isEditCard={isEditCard} setIsEditCard={setIsEditCard} />
      <AddCard isAddCard={isAddCard} setIsAddCard={setIsAddCard} />
    </>
  );
};

export default Details;
