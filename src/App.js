
import React, { Component } from 'react';
import './App.css';
import Input from './components/input/Input';
import ItemsList from './components/input/ItemsList/ItemsList';

class App extends Component {
  constructor(props) {
    super(props)
    this.changeItemsList = this.changeItemsList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setEditableItem = this.setEditableItem.bind(this)
    this.changeEditableItem = this.changeEditableItem.bind(this)
    this.spanUpdate = this.spanUpdate.bind(this)
  }

  state = {
    itemsList: [],
    editableItem: {
      item: {},
      index: null
    }
  }

  changeItemsList(item) {
    this.setState((state) => ({
      itemsList: [
        ...state.itemsList,
        item
      ]
    }))
  }

  changeEditableItem(event) {
    this.setState((state) => ({
      editableItem: {
        ...state.editableItem,
        item: event.target.value
      }
    }))
  }

  spanUpdate() {
    const newArray = this.state.itemsList.map((item, index) => {
      if (this.state.editableItem.index === index) {
        return this.state.editableItem.item
      }
       return item
    })
    this.setState({
      editableItem: {
        item: '',
        index: null
      },
      itemsList:newArray
    })
  }
  setEditableItem(item, index) {
    this.setState({
      editableItem: {
        item,
        index
      }
    })
  }
  deleteItem(itemIndex) {
    const itemsList = [...this.state.itemsList]
    itemsList.splice(itemIndex, 1)
    this.setState({ itemsList })
  }

  render() {

    return (
      <div className="App">
        <Input changeItemsList={this.changeItemsList} editableItem={this.state.editableItem} changeEditableItem={this.changeEditableItem} spanUpdate={this.spanUpdate} />
        <ItemsList itemsList={this.state.itemsList} deleteItem={this.deleteItem} setEditableItem={this.setEditableItem} spanUpdate={this.spanUpdate} />

      </div>
    );
  }
}

export default App;
