import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props){
  return(
    <>
    <h2>Coffee List</h2>
      {props.coffeeList.map((coffee) =>
        <Coffee 
          whenCoffeeClicked = { props.onCoffeeSelection }
          name= {coffee.name}
          origin= {coffee.origin}
          price= {coffee.price}
          roast= {coffee.roast}
          amount= {coffee.amount}
          id = {coffee.id}
          key= {coffee.id} 
          sellPound = {props.depleteCoffee} />

      )}
    </>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
  depleteCoffee: PropTypes.func
};


export default CoffeeList;
