import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "react";

function EditCoffeeForm(props){
  const{coffee} = props;

  function handleEditFormSubmission(e){
    e.preventDefault();
    props.onEdit({
      name: e.target.name.value,
      origin: e.target.origin.value,
      price: e.target.price.value,
      roast: e.target.roast.value,
      id: coffee.id,
    
    })
  }
    return (
      <>
      <h2>Update Coffee Information</h2>
      <ReusableForm
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Submit Edit" />
      </>
    );
  }

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEdit: PropTypes.func
}
export default EditCoffeeForm;