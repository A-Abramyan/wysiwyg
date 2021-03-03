
import React, { Component } from 'react';
import './Input.css';


class Input extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);

        this.state = { value: '' }
    }

    handleInputChange(event) {
        this.setState({ value: event.target.value })
    }

    handleAddItem() {
        const { value } = this.state
        this.setState({ value: '' })
        this.props.changeItemsList(value)
        
    }
    render() {
        const { editableItem, changeEditableItem, spanUpdate } = this.props
        return (
            
            <div className="app">
                <div>
                    Name:
                     <input className='addInpt' placeholder='Write text' type='text' value={this.state.value} onChange={this.handleInputChange} />
                    <button className='addBtn' onClick={this.handleAddItem}  >Add</button>
                </div>
                {editableItem.index !== null && (
                    <div className='update'>
                        Edit:
                        <input className='editInpt' type='text' value={editableItem.item} onChange={changeEditableItem} />
                        <button className='updateBtn' onClick={spanUpdate}>Update</button>
                    </div>
                )}
            </div>
        );
    }
}

export default Input;
