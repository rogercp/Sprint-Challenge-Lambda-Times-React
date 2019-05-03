import React, { Component } from 'react';
import Card from './Card';
import Proptypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
          props.cards.map((card,i)=>(
            <Card key={i} card={cards}/>
          ))
          }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes={
  card:Proptypes.object
}


export default Cards;