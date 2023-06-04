import React from "react";

function NewCoffeeOrder(props){
  function handleNewCoffeeOrder(event){
    event.prevenDefault();
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
          type= 'number'
          name="price"
          placeholder="price " />
        <input
          type= 'number'
          name="quantity"
          placeholder="quantity" />

      <button type="submit">Purchase</button>
      </form>
    </>
  );
}

export default NewCoffeeOrder;