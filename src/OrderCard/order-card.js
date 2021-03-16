import React, { Component } from 'react';
import './order-card.css';
import OrderItem from '../OrderItem/order-item';

class OrderCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="order_card_Wrapper">
                {
                    this.props?.deleIcon ?
                    <div className="order_card_delete_icon_wrapper">
                        <i onClick={this.props.deleteItem} className="fas fa-trash"></i>
                    </div>
                    : ""
                }
                <div>Order Id: {this.props?.order_id}</div>
                <div>Cust. Name: {this.props?.first_name} {this.props.last_name}</div>
                <div>Total Amt.: Rs: {this.props?.total_amount}</div>
                <div>
                    {
                        this.props?.products?.map((data,index)=>
                            <OrderItem key={index} prd_name={data.prd_name} prdqty={data.prdqty} />
                        )
                    }
                </div>
            </div>
         );
    }
}
 
export default OrderCard;