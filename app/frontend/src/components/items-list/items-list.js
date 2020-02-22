import React, { Component } from 'react';

import axios from "axios";

import './items-list.css'

export default class ItemsList extends Component {

    state = {
        itemList: {}
    };

    getData = () => {
        axios.get("http://localhost:8000/items/")
        .then((items) => { 
            this.setState({ itemList: items.data})        
        });       
    }

    deleteItem = (item) => {
        console.log(item.id)
        axios
            .delete(`http://localhost:8000/items/${item.id}`)
            .then(item = () => {this.refreshList()})
    }
 
    componentDidMount = () => {
        this.getData()
    }

    refreshList = () => {
        axios
          .get("http://localhost:8000/items/")
          .then(res => this.setState({ itemList: res.data }))
          .catch(err => console.log(err));
      };
    
 
    get_items(items) {

        return Object.keys(items).map((item) => {
            
            return (
                
                    <tr key={items[item].id + `tr`}>
                        <td key={items[item].id}>{items[item].name}</td>
                        <td key={items[item].id + `td`}>{items[item].related_to}</td>
                        <td type="button" onClick={() => this.deleteItem(items[item])}>Delete</td>
                        <td >Edit</td>
                    </tr>
                    
                
                
  
            );
        });
    }




    render() {

        const items = this.state.itemList
        const items_list = this.get_items(items)

        console.log("kur cia", this.state.itemList)

        return (
            
                <div className="items-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Task or item</th>
                                <th>Item or Task Related To</th>
                            </tr>
                         </thead>
                        <tbody>
                            {items_list}
                            
                        </tbody>
                    </table>
                </div>
            
        )
    } 
}