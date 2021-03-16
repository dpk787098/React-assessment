import React, { Component } from 'react';
import TitleBar from '../TitleBar/title-bar';
import { connect } from 'react-redux';
import './view-orders.css';
import OrderCard from '../OrderCard/order-card';

class ViewOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
            <div className="view_order_wrapper">
                <TitleBar title="View Orders" />
                <div className="view_order_bar">
                    {
                        this.props?.ordersData?.map((data,index)=>
                            <OrderCard 
                                key={index}
                                first_name={data.first_name}
                                last_name={data.last_name}
                                total_amount={data.total_amount}
                                order_id={data.order_id}
                                products={data.products}
                                deleIcon={false}
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

const mapDispatchToProps = {}
 
export default connect(mapStateToProps,mapDispatchToProps)(ViewOrders);