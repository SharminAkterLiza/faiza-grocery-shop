import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, clearCart, children } = props;

    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
    }
    let grandTotal = 30 + total;
    let tax = 0;

    let nameP = '';

    for (const names of cart) {
        nameP = nameP + names.name + ',' + '                    ';
    }


    return (
        <div className='cart'>
            <h2>  Order summary :-- </h2>
            <p>selected Item: {quantity}</p>
            <p>Total price : {total} Tk</p>
            <p>Delivery Charge : 30 Tk</p>
            <p>Tax: {tax} Tk</p>
            <h4>Grand Total :{grandTotal} Tk</h4>
            <button onClick={clearCart} className='clear-cart'>Clear Cart</button>
            {children}
            <h2 className='style-itemHeadin'>Selected items are :</h2>
            <h5>{nameP}</h5>
        </div>
    );
};

export default Cart;