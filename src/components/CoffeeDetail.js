import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee } = props;

  return (
    <>
      <h1>Coffee Detail</h1>
      <h2>{coffee.name} at ${coffee.price} per lb.</h2>
      <li>{coffee.origin}</li>
      <li>{coffee.roast}</li>
      <li>{coffee.quantity}</li>
      <hr/>
    </>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object
};

export default CoffeeDetail;