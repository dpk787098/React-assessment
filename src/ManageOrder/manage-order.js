import React, { Component } from 'react';
import TitleBar from '../TitleBar/title-bar';
import './manage-order.css';
import { connect } from 'react-redux';
import OrderCard from '../OrderCard/order-card';
import { removeOrderDataAction } from '../Actions/actions';

class ManageOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    deleteOrderCard=(data)=>{
        this.props.removeOrderData(data);
        alert("Order Deleted");
    }

    render() { 
        return ( 
            <div className="manage_order_wrapper">
                <TitleBar title="Manager Order" />
                <div className="manage_order_bar">
                    {
                        this.props?.ordersData?.map((data,index)=>
                            <OrderCard
                                key={data.index}
                                first_name={data.first_name}
                                last_name={data.last_name}
                                total_amount={data.total_amount}
                                order_id={data.order_id}
                                products={data.products}
                                deleIcon="false"
                                deleteItem={()=>this.deleteOrderCard(data)}
                            />
                        )
                    }
                </div>
            </div>
         );
    }
}

const mapStateToProps = (globalStore) =>({
    ordersData: globalStore?.productReducer?.ordersData,
})

const mapDispatchToProps = {
    removeOrderData: (data)=>removeOrderDataAction(data)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(ManageOrder);