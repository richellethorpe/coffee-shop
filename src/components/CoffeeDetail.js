import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props;

  return (
    <>
      <h1>Coffee Detail</h1>
      <h2>{coffee.name} at ${coffee.price} per lb.</h2>
      <p>Origin: {coffee.origin}</p>
      <p>Roast: {coffee.roast}</p>
      <hr/>
      <button onClick = { props.onClickingEdit }>Edit Coffee</button>
    
      <hr/>
      <button onClick={()=> onClickingDelete(coffee.id) }>DELETE</button>

    </ >
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  qty: PropTypes.number,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default CoffeeDetail;
