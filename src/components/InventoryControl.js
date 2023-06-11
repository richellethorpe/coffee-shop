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
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
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

  handleDepletingInventory = (id)=> {   
    const selectedCoffee = this.state.mainInventoryList.filter(item => item.id === id)[0];
    const reductedCoffee = { ...selectedCoffee, amount: (selectedCoffee.amount === 0) ? 0 : selectedCoffee.amount - 1 };
    this.setState({ selectedCoffee: selectedCoffee });
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== reductedCoffee.id)
      .concat(reductedCoffee);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    });
  } 

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedItem: null
    });
  }


  handleEditClick = () => {
    this.setState({ editing: true });
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText= null;

    if (this.state.editing){
      currentlyVisibleState= <EditCoffeeForm coffee={this.state.selectedCoffee} onClickingEdit={this.handleEditingCoffeeInList} />
      buttonText= "Return to Coffee List"
    } 
    else if (this.state.selectedCoffee != null){
      currentlyVisibleState = <CoffeeDetail coffee ={this.state.selectedCoffee} onClickingDelete= {this.handleDeletingCoffee}
      onClickingEdit={this.handleEditClick} />
      buttonText= "Return to Coffee List"
    }
    else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeOrder onNewCoffeeCreation= {this.handleAddingNewCoffeeToList}/>;
      buttonText= "Return to Coffee List"
    }
    else{
      currentlyVisibleState= <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee} reductedCoffee={this.handleDepletingInventory}/>
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