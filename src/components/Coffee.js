import React from "react";
import PropTypes from "prop-types";

 

function Coffee(props){
  return(
    <>
      <div onClick= {() => props.whenCoffeeClicked(props.id)}>
        <h2>{props.name} = ${props.price} per pound</h2>
        <h3>Amount Available: {(props.qty === 0) ? 'Unavailable, 0 in stock' : props.qty} pounds available</h3>
        <button onClick={() => props.sellPound(props.id)}>Sell pound</button>
      </div>
    </>
  )
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  id: PropTypes.string,
  qty: PropTypes.number,
  whenCoffeeClicked: PropTypes.func,
  sellPound: PropTypes.func
};

export default Coffee;
