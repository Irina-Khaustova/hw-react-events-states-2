import React from "react";
import ShopCard from "../ShopCard";
import PropTypes from 'prop-types'

export default function CardsView(props) {
    const { cards } = props;
   // console.log(cardsItems)
      return (
        <div className="cardsView">
         {cards.map((card, i) => (
          <ShopCard key ={i} card={card}>
          </ShopCard>
           ))
  }
        </div>
      )
  }

  CardsView.propTypes = {
    cards: PropTypes.array
  };