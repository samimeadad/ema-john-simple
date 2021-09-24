import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = ( props ) => {
    const { name, img, price, seller, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={ faShoppingCart } />

    return (
        <div className="product">
            <div className="product-image">
                <img src={ img } alt="" />
            </div>
            <div>
                <h3 className="product-name">{ name }</h3>
                <p><small>By: { seller }</small></p>
                <h3>$<span>{ price }</span></h3>
                <p><small>only { stock } left in stock - order soon</small></p>
                <p><Rating
                    initialRating={ star }
                    emptySymbol="far fa-star rating-color"
                    fullSymbol="fas fa-star rating-color"
                    readonly></Rating></p>
                <button onClick={ () => props.handleAddToCart( props.product ) } className="btn-purchase">{ cartIcon } add to cart</button>
            </div>
        </div>
    );
};

export default Product;