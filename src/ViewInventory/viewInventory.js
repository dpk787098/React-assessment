import React, { Component } from 'react';
import "./viewInventory.css";
import TitleBar from '../TitleBar/title-bar';
import { connect } from 'react-redux';
import ProductBar from '../ProductBar/product-bar';
import { removeProductDataAction } from '../Actions/actions';

class ViewInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    removeProductData=(data)=>{
        this.props.removeProductData(data);
        alert("Deleted a product successfully")
    }


    render() { 
        return ( 
            <div className="inventory_wrapper">
                <TitleBar title="View Inventory" />
                <div className="products_bar">
                    {this.props?.productData?.map((data,index)=>
                    <ProductBar 
                        key={index}
                        medicine_name={data.medicine_name} 
                        brand_name={data.brand_name}
                        description={data.description}
                        price={data.price}
                        product_code={data.product_code}
                        deleteItem={()=>this.removeProductData(data)}
                    />
                    )}
                </div>
            </div>
         );
    }
}

const mapStateToProps = (globalStore) =>({
    productData: globalStore?.productReducer?.productData
})

const mapDispatchToProps = {
    removeProductData: (data)=>removeProductDataAction(data),
}
 
export default connect(mapStateToProps,mapDispatchToProps)(ViewInventory);
