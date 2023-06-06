import React from "react";
import CoffeeList from './CoffeeList';
import NewCoffeeOrder from "./NewCoffeeOrder";
import CoffeeDetail from "./CoffeeDetail";

class InventoryControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee !=null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null
      })
    }
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText= null;
    if (this.state.selectedCoffee != null){
      currentlyVisibleState = <CoffeeDetail coffee ={this.state.selectedCoffee} />
      buttonText= "Return to Coffee List"
    }
    else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeOrder onNewCoffeeCreation= {this.handleAddingNewCoffeeToList}/>;
      buttonText= "Return to Coffee List"
    }
    else{
      currentlyVisibleState= <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee} />
      buttonText= "Add Coffee"
      
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default InventoryControl;