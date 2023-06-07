import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props){
  return(
    <>
      {props.coffeeList.map((coffee) =>
        <Coffee 
          whenCoffeeClicked = { props.onCoffeeSelection }
          name= {coffee.name}
          origin= {coffee.origin}
          price= {coffee.price}
          roast= {coffee.roast}
          id = {coffee.id}
          key= {coffee.id} />

      )}
    </>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};


export default CoffeeList;
