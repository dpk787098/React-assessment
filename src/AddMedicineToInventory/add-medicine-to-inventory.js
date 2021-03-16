import React, { Component } from 'react';
import TitleBar from '../TitleBar/title-bar';
import './add-medicine-to-inventory.css';
import { connect } from 'react-redux';
import { addProductDataAction } from '../Actions/actions';

class AddMedicineToInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData:{
                id: null,
                medicine_name: null,
                brand_name: null,
                price: null,
                product_code: null,
                description: null,
            }
         }
    }

    onNameChange=(e)=>{
        this.setState({
            productData: {
                ...this.state.productData,
                medicine_name: e.target.value
            }
        });
    }

    onBrandNameChange=(e)=>{
        this.setState({
            productData: {
                ...this.state.productData,
                brand_name:e.target.value
            }
        });
    }

    onpriceChange=(e)=>{
        this.setState({
            productData: {
                ...this.state.productData,
                price:e.target.value
            }
        });
    }

    onProductCodeChange=(e)=>{
        this.setState({
            productData: {
                ...this.state.productData,
                product_code:e.target.value
            }
        });
    }

    onDescriptionChange=(e)=>{
        this.setState({
            productData: {
                ...this.state.productData,
                description:e.target.value
            }
        });
    }

    addMedicine=(e)=>{
        e.preventDefault();
        this.setState({
            productData: {
                ...this.state.productData,
                id: this.props.productData.length+1,
            }
        },()=>this.props.addProductData(this.state.productData));
        alert("Medicine added to inventory");
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
        );
    }


    render() { 
        return ( 
            <div className="add_medicine_wrapper">
                <TitleBar title="Add Medicine" />
                <div className="add_medicine_bar">
                    <form className="form_wrap" onSubmit={this.addMedicine}>
                        <div className="label_input_wrapper">
                            <label>Medicine Name: </label>
                            <input onChange={(e)=>this.onNameChange(e)} required type="text" placeholder="Enter name of the medicine" />
                        </div>
                        <div className="label_input_wrapper">
                            <label>Medicine Brand: </label>
                            <input onChange={(e)=>this.onBrandNameChange(e)} required type="text" placeholder="Enter name of the medicine brand" />
                        </div>
                        <div className="label_input_wrapper">
                            <label>Product Code:</label>
                            <input onChange={(e)=>this.onProductCodeChange(e)} required type="text" minLength="10" maxLength="10" placeholder="Enter the product code" />
                        </div>
                        <div className="label_input_wrapper">
                            <label>Price: </label>
                            <input onChange={(e)=>this.onpriceChange(e)} required type="number" placeholder="Enter name of the medicine" />
                        </div>
                        <div className="label_input_wrapper">
                            <label>Description: </label>
                            <textarea onChange={(e)=>this.onDescriptionChange(e)} required type="text" placeholder="Enter medicine description" />
                        </div>
                        <button type="submit">Add to inventory</button>
                    </form>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (globalStore) =>({
    productData: globalStore?.productReducer?.productData,
})

const mapDispatchToProps = {
    addProductData: (data)=>addProductDataAction(data),
}
 
export default connect(mapStateToProps,mapDispatchToProps)(AddMedicineToInventory);