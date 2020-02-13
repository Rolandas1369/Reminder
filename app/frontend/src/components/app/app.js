import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import ItemsList from '../items-list';
 
export default class App extends Component {
 
    
   
    render() {
 
        return (
            <div className="app">    
                <Header />
                <div className="main">
                <ItemsList />
                    
                    
                </div>
            </div>
 
        )
    }
 
}