import React, { Component } from 'react';
import './store-manager-homepage.css';
import ViewInventory from '../ViewInventory/viewInventory';
import AddMedicineToInventory from '../AddMedicineToInventory/add-medicine-to-inventory';
import ViewTeam from '../ViewTeam/view-team';
import AddSalesExecutive from '../AddSalesExecutive/add-sales-executive';
import ManageOrder from '../ManageOrder/manage-order';
import { connect } from 'react-redux';
import { storeProductDataAction, storeSalesExecutiveDataAction, storeOrdersDataAction } from '../Actions/actions';
import { productData } from '../assets/productData';
import { salesExecutiveData } from '../assets/salesExecutiveData';
import { ordersData } from '../assets/ordersData';

class StoreManagerHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tabName: "View Inventory",
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
            <div className="store_screen_wrap">
                <div className="navbar_wrapper">
                    <div onClick={()=>this.tabChange("View Inventory")} className="link_item" >View Inventory</div>
                    <div onClick={()=>this.tabChange("Add Medicine to Inventory")} className="link_item" >Add Medicine to Inventory</div>
                    <div onClick={()=>this.tabChange("View Team")} className="link_item" >View Team</div>
                    <div onClick={()=>this.tabChange("Add Sales Executive")} className="link_item" >Add Sales Executive</div>
                    <div onClick={()=>this.tabChange("Manage Order")} className="link_item" >Manage Order</div>
                </div>
                {
                    this.state.tabName === "View Inventory" ?
                    <ViewInventory /> 
                    : ""
                }
                {
                    this.state.tabName === "Add Medicine to Inventory" ?
                    <AddMedicineToInventory /> 
                    : ""
                }
                {
                    this.state.tabName === "View Team" ?
                    <ViewTeam />
                    : ""
                }
                {
                    this.state.tabName === "Add Sales Executive" ?
                    <AddSalesExecutive />
                    : ""
                }
                {
                    this.state.tabName === "Manage Order" ?
                    <ManageOrder />
                    : ""
                }
            </div>
         );
    }
}

const mapStateToProps = (globalStore) =>({
    productData: globalStore?.productReducer?.productData
})

const mapDispatchToProps = {
    storeProductData: (data)=>storeProductDataAction(data),
    storeSalesExecutiveData: (data)=>storeSalesExecutiveDataAction(data),
    storeOrdersData: (data)=>storeOrdersDataAction(data)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(StoreManagerHomePage);