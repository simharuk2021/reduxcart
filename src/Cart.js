import React, { Component } from "react";
import AddProduct from "./AddProduct";
import { Table } from 'reactstrap';

class Cart extends Component {
    render() {
        return (
            <div className="container">
                <h2>Shopping Cart</h2>
                <p>add products and their prices below</p>
                <AddProduct addProduct={this.props.onAddProduct} />
                <Table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.productCart.map(productData => (
                            <tr key={productData.productName}>
                                <td>{productData.productName}</td>
                                <td>{productData.productPrice}</td>
                                <td>
                                    <button
                                        className="btn-danger"
                                        onClick={() => this.props.onDeleteProduct(productData)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="total-amount">
                    <span>Total Amount: {this.props.totalCost}</span>
                </div>
            </div>
        );
    }
}

export default Cart;
