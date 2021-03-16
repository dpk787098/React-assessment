import React, { Component } from 'react';
import './product-bar.css';

class ProductBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="product_bar_wrapper">
                <div>{this.props.medicine_name}</div>
                <div>{this.props.brand_name}</div>
                <div>{this.props.description}</div>
                <div>{this.props.product_code}</div>
                <div>RS: {this.props.price}</div>
                <div>
                    <i onClick={this.props.deleteItem} className="fas fa-trash"></i>
                </div>
            </div>
         );
    }
}
 
export default ProductBar;