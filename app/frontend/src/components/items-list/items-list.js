import React, { Component } from 'react';



import './items-list.css'


const EditField = (props) => {
    return (
        <tr>
            <td>hel;l=</td>
        </tr>
    )
}

export default class ItemsList extends Component {

    

    state = {
        itemList: ''
    };

    
 
    get_items(items) {


        const edit = this.props.editValue

        console.log(edit)

        

        
        const x = edit ? <EditField /> : null;
        

        return Object.keys(items).map((item) => {
            
            return (
                
                    <tr key={items[item].id + `tr`} id={items[item].id + `tr`}>
                        <td key={items[item].id}>{items[item].name}</td>
                        <td key={items[item].id + `td`}>{items[item].related_to}</td>
                        <td onClick={() => this.props.deleteItem(items[item])}>Delete</td>
                        <td onClick={() => this.props.editItem(items[item])}>Edit</td>
                        
                    </tr>
                    
                    
                
                
  
            );
        });
    }




    render() {

        const items = this.props.itemList

        const items_list = this.get_items(items)

        

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
                            <EditField />
                            
                            
                        </tbody>
                    </table>
                </div>
            
        )
    } 
}