import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    render() {
        return (
           <div className="item-add-form">
               <button
            //    then click is made onItemAdded(from props) that are passed in app and it activates additem event
               onClick={() => this.props.onItemAdded('Hello world')}
               >Add item</button>
           </div>  
        )
    }
}
