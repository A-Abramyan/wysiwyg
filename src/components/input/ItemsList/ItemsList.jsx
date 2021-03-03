import { Component } from 'react';
import './ItemList.css'

class ItemsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { itemsList, deleteItem ,setEditableItem } = this.props
        

        return (<div>
            {itemsList.length > 0 ? itemsList.map((item, index) => (
                <div className='row'>
                    <span>{item}</span>
                    <div className='btnBox'>
                        <button onClick={() => deleteItem(index)} className='removeBtn'>x</button>
                        <button onClick={() => setEditableItem(item,index)}  className='editBtn'>Edit</button>
                    </div>
                </div>
            )) : 'no items'}
        </div>
        )
    }
}

export default ItemsList;
