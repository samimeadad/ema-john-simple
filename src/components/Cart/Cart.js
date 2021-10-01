import React from 'react';

const Cart = ( props ) => {
    const { cart } = props;
    let itemPrice = 0;
    let totalQuantity = 0;

    for ( const product of cart ) {
        if ( !product.quantity ) {
            product.quantity = 1;
        }
        itemPrice = itemPrice + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = itemPrice > 100 ? 15 : 0;
    const total = itemPrice + shipping;
    const tax = itemPrice * 0.1;
    const grandTotal = total + tax;

    return (
        <div>
            <div>
                <h2>Order Summary</h2>
                <h3>Items Ordered: { totalQuantity } </h3>
            </div>
            <div>
                <h4>Items Price: <span>${ itemPrice.toFixed( 2 ) }</span></h4>
                <h4>Shipping & Handling: <span>${ shipping.toFixed( 2 ) }</span></h4>
                <h4>Total without Tax: <span>${ total.toFixed( 2 ) }</span></h4>
                <h4>TAX: <span>${ tax.toFixed( 2 ) }</span></h4>
                <h2 style={ { color: "red" } }>Grand Total: <span>${ grandTotal.toFixed( 2 ) }</span></h2>
            </div>

        </div >
    );
};

export default Cart;