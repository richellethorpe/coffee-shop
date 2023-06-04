import React from "react";
import CoffeeList from './CoffeeList';
import NewCoffeeOrder from "./NewCoffeeOrder";

class InventoryControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText= null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeOrder onNewCoffeeCreation= {this.handleAddingNewCoffeeToList}/>
      buttonText= "Return to Coffee List"
    }else{
      currentlyVisibleState= <CoffeeList coffeeList={this.state.mainCoffeeList}/>
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
