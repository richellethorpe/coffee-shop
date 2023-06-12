import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewCoffeeOrder(props){
  function handleNewCoffeeOrder(event){
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      roast: event.target.roast.value, 
      price: event.target.price.value,
      id: v4(),
      qty: 130
    });
  }

  return(
    <>
      <ReusableForm
        formSubmissionHandler={handleNewCoffeeOrder}
        buttonText = "Submit Order" />

    </>
  );
}
NewCoffeeOrder.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeOrder;