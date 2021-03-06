import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css';

const Shop = () => {
    const [ products, setProducts ] = useState( [] );
    const [ cart, setCart ] = useState( [] );
    //Products to be rendered on the UI
    const [ displayProducts, setDisplayProducts ] = useState( [] );

    useEffect( () => {
        fetch( './products.JSON' )
            .then( res => res.json() )
            .then( data => {
                setProducts( data )
                setDisplayProducts( data )
            } );
    }, [] );

    useEffect( () => {
        if ( products.length ) {
            const storedCart = [];
            const savedCart = getStoredCart();
            for ( const key in savedCart ) {
                const addedProduct = products.find( product => product.key === key );
                if ( addedProduct ) {
                    const quantity = savedCart[ key ];
                    addedProduct.quantity = quantity;
                    storedCart.push( addedProduct );
                }
            }
            setCart( storedCart );
        }

    }, [ products ] )

    const handleAddToCart = product => {
        const newCart = [ ...cart, product ];
        setCart( newCart );
        //Save to Local Storage
        addToDb( product.key );
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter( product => product.name.toLowerCase().includes( searchText.toLowerCase() ) );
        setDisplayProducts( matchedProducts );
    }

    return (
        <>
            <div className="search-container">
                <input
                    onChange={ handleSearch }
                    type="text"
                    placeholder="Search Your Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h3>Total Products: { displayProducts.length }</h3>
                    {
                        displayProducts.map( product => <Product
                            key={ product.key }
                            product={ product }
                            handleAddToCart={ handleAddToCart }
                        ></Product> )
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={ cart }></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;