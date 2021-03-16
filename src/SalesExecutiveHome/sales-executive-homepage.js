import React, { Component } from 'react';
import './sales-executive-homepage.css';
import ViewOrders from '../ViewOrders/view-orders';
import CreateOrder from '../CreateOrder/create-order';
import { connect } from 'react-redux';
import { storeProductDataAction, storeSalesExecutiveDataAction, storeOrdersDataAction } from '../Actions/actions';
import { ordersData } from '../assets/ordersData';
import { productData } from '../assets/productData';
import { salesExecutiveData } from '../assets/salesExecutiveData';

class SalesExecutiveHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tabName: "View Orders"
         }
    }

    componentDidMount(){
        if(localStorage && localStorage.length){
            this.props.storeProductData(JSON.parse(localStorage.getItem('productData')));
            this.props.storeSalesExecutiveData(JSON.parse(localStorage.getItem('salesExecutiveData')));
            this.props.storeOrdersData(JSON.parse(localStorage.getItem('ordersData')));
        }
        else{
            localStorage.setItem('productData', JSON.stringify(productData));
            localStorage.setItem('salesExecutiveData', JSON.stringify(salesExecutiveData));
            localStorage.setItem('ordersData', JSON.stringify(ordersData));
            this.props.storeProductData(productData);
            this.props.storeSalesExecutiveData(salesExecutiveData);
            this.props.storeOrdersData(ordersData);
        }
    }

    tabChange = value =>{
        this.setState({tabName:value});
    }


    render() { 
        return ( 
            <div className="sales_screen_wrap">
                <div className="sales_navbar_wrapper">
                    <div onClick={()=>this.tabChange("View Orders")} className="sales_link_item" >View Orders</div>
                    <div onClick={()=>this.tabChange("Create Order")} className="sales_link_item" >Create Order</div>
                </div>
                {
                    this.state.tabName === "View Orders" ?
                    <ViewOrders /> 
                    : ""
                }
                {
                    this.state.tabName === "Create Order" ?
                    <CreateOrder /> 
                    : ""
                }
            </div>
         );
    }
}

const mapStateToProps = (globalStore) =>({
    ordersData: globalStore?.productReducer?.ordersData,
})

const mapDispatchToProps = {
    storeOrdersData: (data)=>storeOrdersDataAction(data),
    storeProductData: (data)=>storeProductDataAction(data),
    storeSalesExecutiveData: (data)=>storeSalesExecutiveDataAction(data),
}
 
export default connect(mapStateToProps,mapDispatchToProps)(SalesExecutiveHomePage);