import React from "react";
import PropTypes from "prop-types"
 

function Coffee(props){
  return(
    <>
      <div onClick= {() => props.whenCoffeeClicked(props.id)}>
        <h2>{props.name} = ${props.price} per pound</h2>

      </div>
    </>
  )
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
};

export default Coffee;
