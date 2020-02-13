import React, { Component } from 'react';
import axios from "axios";
 
export default class App extends Component {
 
    state = {
        itemList: 0
    };

    getData = () => {
        axios.get("http://localhost:8000/items/")
        .then((data) => { 
            const x = data.data
            console.log("getdata", x)
            this.setState({ itemList: x})
            
        });       
    }
 
    componentDidMount = () => {
        // we are getting data from props
        const data = this.getData()
        // this.setState({
        //     itemList: data
        // })
        console.log("mounted", this.state)
    }
    
 
    renders(x) {
        return Object.keys(x).map((item) => {
            
            return (
                <li>{x[item]['name']}</li>
            );
        });
    }
   
 
 
 
    render() {
 
        
        const x = this.state.itemList

        const ii = this.renders(x)

        console.log("kur cia", this.state.itemList)
        
        // console.log((itemList[0]).id)
 
        // const items = this.renderItems(itemList);
 
        return (
            <ul>
                <p>{ii}</p>
            </ul>
 
        )
    }
 
}