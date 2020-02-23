import React, {Component} from 'react';

import './item-add-form.css';
import axios from 'axios';

export default class ItemAddForm extends Component {

    state = {
        taskOrItem: '',
        itemRelatedTo: ''
    }

    // refreshList = () => {
    //     axios
    //       .get("http://localhost:8000/items/")
    //       .then(res => this.setState({ itemList: res.data }))
    //       .catch(err => console.log(err));
    // };

    onSubmit = (e) => {
        e.preventDefault()
        const data = { 
            related_to: this.state.itemRelatedTo,
            name: this.state.taskOrItem
        }
        console.log(data)
        axios
            .post("http://localhost:8000/items/", data)
            .then(res => console.log(res))
            .then(this.props.refreshList())
            .catch(err => console.log(err));
        
        

        console.log(this.state.taskOrItem)
        console.log(this.state.itemRelatedTo)
        
    }


    onLabelChange = (e) => {
        
        this.setState({
            // label that is updated in state
            taskOrItem: e.target.value,
        });   
    };

    onNextChange = (e) => {
        this.setState({
            // label that is updated in state
            itemRelatedTo: e.target.value
        });   
    };

    render() {
        return (
           <div className="item-add-form">
                <form className="item-add-form"
                   onSubmit={this.onSubmit}    >
                    <input type="text" className="taskField"
                        value={this.state.taskOrItem}
                        onChange={this.onLabelChange}
                        placeholder="Task"
                        />
                    <input type="text" className="relatedField"
                        value={this.state.itemRelatedTo}
                        onChange={this.onNextChange}
                        placeholder="Related"
                     />
                    <button
                    //    then click is made onItemAdded(from props) that are passed in app and it activates additem event
                    //onClick={() => this.props.onItemAdded('Hello world')}
                    >Add item</button>
                </form>
           </div>  
        )
    }
}
