import React from "react";
import CoffeeList from './CoffeeList';
import NewCoffeeOrder from "./NewCoffeeOrder";

class InventoryControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText= null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeOrder />
      buttonText= "Return to Coffee List"
    }else{
      currentlyVisibleState= <CoffeeList />
      buttonText= "Add Coffee"
      
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}
