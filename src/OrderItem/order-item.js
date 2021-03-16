import React, { Component } from 'react';
import './order-item.css';

class OderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="item_wrapper">
                <p>{this.props.prd_name}</p>
                <p>{this.props.prdqty}</p>
            </div>
         );
    }
}
 
export default OderItem;