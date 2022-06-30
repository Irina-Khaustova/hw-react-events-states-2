import React from "react";
import PropTypes from 'prop-types'

export default function ShopCard (props) {
  const { card } = props;
  //console.log(card)

  return (
    <div className="shopCard">
      <h2 className="cardName">{card.name}</h2>
      <p className="cardColor">{card.color}</p>
      <img src={card.img}/>
      <div className="priceButtonContainer">
        <span className="cardPrice">${card.price}</span>
        <button className="buttonAdd">Add to cart</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  card: PropTypes.object
};