import React, { Component } from 'react';

class AddProduct extends Component{

    state = {
        productName: '',
        productPrice: 0
    }

    productNameChangeHandler = (event) => {
        this.setState({
            productName: event.target.value
        });
    }

    productPriceChangeHandler = (event) => {
        this.setState({
            productPrice: event.target.value
        });
    }
    render () {
        return(
            <div className="container add-product-container">
                <input type="text" className = "add-product-input" value={this.state.productName} onChange={this.productNameChangeHandler} placeholder='Enter Product Name'/>
                <input type="number" className = "add-product-input" value={this.state.productPrice} onChange={this.productPriceChangeHandler}/>  
                <button className="buttons"
                    onClick={() => this.props.addProduct(this.state.productName, this.state.productPrice)}>Add Product</button>
            </div>
        );
    }
};

export default AddProduct;