import React from "react";
import PropTypes from "prop-types"
 

function Coffee(props){
  return(
    <>
    <h2>{props.name} = ${props.price} per pound</h2>
    <li>{props.origin}</li>
    <li>{props.roast}</li>
    <li>{props.roast}</li>
    <li>{props.quantity}</li>

    </>
  )
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Coffee;
