import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewCoffeeOrder(props){
  function handleNewCoffeeOrder(event){
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      roast: event.target.roast.value, 
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }

  return(
    <>
      <form onSubmit={handleNewCoffeeOrder}>
        <input
          type= 'text'
          name= 'name'
          placeholder= 'coffee name' />
        <input
          type= 'text'
          name="origin"
          placeholder="origin" />
        <input
          type= "text"
          name="roast"
          placeholder="roast" />  
        <input
          type= 'text'
          name="price"
          placeholder="price " />
        <input
          type= 'text'
          name="quantity"
          placeholder="quantity" />

      <button type="submit">Purchase</button>
      </form>
    </>
  );
}
NewCoffeeOrder.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeOrder;