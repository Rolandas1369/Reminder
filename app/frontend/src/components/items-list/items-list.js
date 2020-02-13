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
 
    componentDidMount = () => {
        this.getData()
    }
    
 
    get_items(items) {

        return Object.keys(items).map((item) => {
            
            return (
                
                <tr>
                    <td key={items[item].id}>{items[item].name}</td>
                    <td key={items[item].id}>{items[item].related_to}</td>
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
                    <table cellpadding="0" cellspacing="0" border="0">
                        {items_list}
                    </table>
 
                </div>
            
        )
    } 
}