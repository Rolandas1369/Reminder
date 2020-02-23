import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import ItemsList from '../items-list';
import ItemAddForm from '../item-add-form';
import axios from "axios";





 
export default class App extends Component {


    state = {
        itemList: "",
        showEdit: true
    }

    toggleEdit = () => {
        this.setState((state) => {
          return {
            showEdit: !state.showEdit
          }
        });
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

    deleteItem = (item) => {
        console.log(item.id)
        axios
            .delete(`http://localhost:8000/items/${item.id}`)
            .then(item = () => {this.refreshList()})
    }

    editItem = (item) => {
        document.querySelector(".taskField").value = `${item.name}`
        document.querySelector(".relatedField").value = `${item.related_to}`;
        
        
        
    }
    refreshList = () => {
        axios
          .get("http://localhost:8000/items/")
          .then(res => this.setState({ itemList: res.data }))
          .catch(err => console.log(err));
      };

 
    render() {
        
        return (
            
            <div className="app">    
                <Header />
                <div className="main">
                    <ItemsList 
                        editValue = {this.state.showEdit}
                        itemList={this.state.itemList}
                        deleteItem={this.deleteItem}
                        editItem={this.editItem}
                        showEdit={this.toggleEdit}/>
                    <ItemAddForm refreshList={this.refreshList}/>  
                </div>
            </div>
 
        )
    }
 
}