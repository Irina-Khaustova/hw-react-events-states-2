import React from "react";
import PropTypes from 'prop-types'

export default function ShopItem (props) {
  const { item } = props;
  console.log(item)

  return (
    <div className="shopItem">
      <img src={item.img}/>
      <h2 className="cardName">{item.name}</h2>
      <p className="cardColor">{item.color}</p>
        <span className="cardPrice">${item.price}</span>
        <button className="buttonAdd">Add to cart</button>
    </div>
  )
}

ShopItem.propTypes = {
  item: PropTypes.object
};