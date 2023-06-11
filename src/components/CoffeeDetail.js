import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props;

  return (
    <>
      <h1>Coffee Detail</h1>
      <h2>{coffee.name} at ${coffee.price} per lb.</h2>
      <li>Origin: {coffee.origin}</li>
      <li>Roast: {coffee.roast}</li>
      <li>Amount Available: {(coffee.amount === 0) ? 'Unavailable, 0 in stock' : coffee.amount} pounds available</li>
      <hr/>
      <button onClick={ props.onClickEdit }>Edit Coffee</button>
    
      <hr/>
      <button onClick={()=> onClickingDelete(coffee.id) }>DELETE</button>
      <hr/>
    </>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickPurchase: PropTypes.func,
  onClickDelete: PropTypes.func
};

export default CoffeeDetail;
