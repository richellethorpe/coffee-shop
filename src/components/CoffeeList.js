import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props){
  return(
    <>
      {props.coffeeList.map((coffee, index)=>
        <Coffee name= {coffee.name}
          origin= {coffee.origin}
          price= {coffee.price}
          roast= {coffee.roast}
          key= {index} />

      )}
    </>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array
}
export default CoffeeList;
