import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import ItemsList from '../items-list';
import ItemAddForm from '../item-add-form';




 
export default class App extends Component {


    state = {
        
    }

    addItem = (text) => {

        const newItem = {
            label: text, 
            important: false, 
            id: this.maxId++
        };

        this.setState(({todoData}) => {
           
            const newTodo = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newTodo
            };
        });
    };

 
    render() {
 
        return (
            <div className="app">    
                <Header />
                <div className="main">
                    <ItemsList />
                    <ItemAddForm />  
                </div>
            </div>
 
        )
    }
 
}