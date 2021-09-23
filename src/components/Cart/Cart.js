import React from 'react';

const Cart = ( props ) => {
    const { cart } = props;
    let itemPrice = 0;
    let shipping = 0;

    for ( const product of cart ) {
        shipping = shipping + product.shipping;
        itemPrice = itemPrice + product.price;
    }

    const total = itemPrice + shipping;
    const tax = total * 0.1;
    const grandTotal = total + tax;

    return (
        <div>
            <div>
                <h2>Order Summary</h2>
                <h3>Items Ordered: { cart.length } </h3>
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