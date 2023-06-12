import React from "react";
import CoffeeList from './CoffeeList';
import NewCoffeeOrder from "./NewCoffeeOrder";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";

class InventoryControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false,
      coffeeToBeSold: null,
      qty: 130
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false,
        coffeeToBeSold : false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
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

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id === id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleDepleteCoffeeClick = () => {
    this.setState({coffeeToBeSold: true})
  }

  handleDepletingInventory = (id)=> {  
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    const reducedCoffeeInventory = { ...selectedCoffee, qty: (selectedCoffee.qty === 0) ? 0 : selectedCoffee.qty - 1}
    this.setState({selectedCoffee: selectedCoffee});
    const reducedCoffeeInventoryList = this.state.mainCoffeeList
                                  .filter(coffee => coffee.id !== reducedCoffeeInventory.id)
                                  .concat(reducedCoffeeInventory);
    this.setState({
      mainCoffeeList : reducedCoffeeInventoryList,
      editing: false,
      selectedCoffee: null
    });
  }


  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditCoffee = (coffeeToEdit) => {
    const newEditedMainCoffeeList = this.state.mainCoffeeList
                            .filter(coffee => coffee.id !== this.state.selectedCoffee)
                            .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: newEditedMainCoffeeList,
      editing : false,
      selectedCoffee: null
    });
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText= null;
  

    if (this.state.editing){
      currentlyVisibleState= <EditCoffeeForm 
        coffee={this.state.selectedCoffee} 
        onEdit={this.handleEditingCoffeeInList} />
      buttonText= "Return to Coffee List"
    } 
    else if (this.state.selectedCoffee != null){
      currentlyVisibleState = <CoffeeDetail 
        coffee ={this.state.selectedCoffee} 
        onClickingDelete= {this.handleDeletingCoffee}
        onClickingEdit={this.handleEditClick}
        qty = {this.state.qty}  />
      buttonText= "Return to Coffee List"
    }
    else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeOrder 
        onNewCoffeeCreation= {this.handleAddingNewCoffeeToList}/>;
      buttonText= "Return to Coffee List"
    }
    else{
      currentlyVisibleState= <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee} reducedCoffee={this.handleDepletingInventory}/>
      
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