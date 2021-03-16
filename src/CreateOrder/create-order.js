import React, { Component } from 'react';
import './create-order.css';
import TitleBar from '../TitleBar/title-bar';
import { connect } from 'react-redux';
import { addOrderDataAction } from '../Actions/actions';

class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orderData:{
                order_id: null,
                first_name: null,
                last_name: null,
                total_amount: null,
                products: [
                    {
                        prd_name: "asdf",
                        prdqty: 9
                    }
                ],
            }
         }
    }

    onOrderIdCange=(e)=>{
        this.setState({
            orderData: {
                ...this.state.orderData,
                order_id: e.target.value
            }
        });
    }

    onFirstNameChange=(e)=>{
        this.setState({
            orderData: {
                ...this.state.orderData,
                first_name:e.target.value
            }
        });
    }

    onLastNameChange=(e)=>{
        this.setState({
            orderData: {
                ...this.state.orderData,
                last_name: e.target.value
            }
        });
    }

    onTotalAmountChange=(e)=>{
        this.setState({
            orderData: {
                ...this.state.orderData,
                total_amount: e.target.value
            }
        });
    }

    onProductNameChange=(e)=>{
        let orderData =this.state.orderData
        orderData.products[0].prd_name = e.target.value;
        this.setState({orderData:orderData});
    }

    onQuantityChange=(e)=>{
        let orderData =this.state.orderData
        orderData.products[0].prdqty = e.target.value;
        this.setState({orderData:orderData});
    }


    createOrder=(e)=>{
        e.preventDefault();
        this.props.addOrderData(this.state.orderData);
        alert("Order Created Sucessfully");
    }

    render() { 
        return ( 
            <div className="create_order_wrapper">
                <TitleBar title="Create Order" />
                <div className="create_order_tab">
                    <form className="create_order_form_wrap" onSubmit={this.createOrder}>
                        <div className="create_order_label_input_wrapper">
                            <label>Order Id: </label>
                            <input onChange={(e)=>this.onOrderIdCange(e)} required type="text" placeholder="Enter order id" />
                        </div>
                        <div className="create_order_label_input_wrapper">
                            <label>First Name: </label>
                            <input onChange={(e)=>this.onFirstNameChange(e)} required type="text" placeholder="Enter first name of customer" />
                        </div>
                        <div className="create_order_label_input_wrapper">
                            <label>Last Name:</label>
                            <input onChange={(e)=>this.onLastNameChange(e)} required type="text" placeholder="Enter first name of customer" />
                        </div>
                        <div className="create_order_label_input_wrapper">
                            <label>Total Amount: </label>
                            <input onChange={(e)=>this.onTotalAmountChange(e)} required type="number" placeholder="Enter total Amount" />
                        </div>
                        <div className="create_order_label_input_wrapper">
                            <label>Product: </label>
                            <input onChange={(e)=>this.onProductNameChange(e)} required type="text" placeholder="Enter the name of product" />
                            <input className="qty_input-field" onChange={(e)=>this.onQuantityChange(e)} required type="number" placeholder="Enter the quntity of product" />
                        </div>
                        <button type="submit">Add Order</button>
                    </form>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (globalStore) =>({})

const mapDispatchToProps = {
    addOrderData: (data)=>addOrderDataAction(data),
}
 
export default connect(mapStateToProps,mapDispatchToProps)(CreateOrder);