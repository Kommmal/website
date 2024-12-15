import React from 'react';
import './Product.css'
import { FiStar } from 'react-icons/fi';

const ProductCart = () => {
    const products = [
        {
            id: 1,
            name: "Apple Smart I",
            previousPrice: '300,000',
            price: '255.00',
            image: "/images/Apple Smart 1.png"
        },
        {
            id: 2,
            name: "Apple Smart II",
            previousPrice: '320,000',
            price: '275.00',
            image: "/images/Apple Smart 2.png"
        },
        {
            id: 3,
            name: "Apple Smart III",
            previousPrice: '350,000',
            price: '300.00',
            image: "/images/Apple Smart 3.png"
        },
        {
            id: 3,
            name: "Apple Smart III",
            previousPrice: '350,000',
            price: '300.00',
            image: "/images/Apple Smart 4.png"
        },
        {
            id: 3,
            name: "Apple Smart III",
            previousPrice: '350,000',
            price: '300.00',
            image: "/images/Apple Smart 5.png"
        },
        {
            id: 3,
            name: "Apple Smart III",
            previousPrice: '350,000',
            price: '300.00',
            image: "/images/Apple Smart 6.png"
        }
    ];

    return (
        <div className="product">
        <div className="product-container">
            <h1>Our Latest Product </h1>
            <div className="cards">
                {products.map(product => (
                    <div key={product.id} className="card">
                        <div className="card-top">
                        <img src={product.image} alt={product.name} className="product-image" />
                        </div>
                        <div className="card-bottom">
                        <h3 className="product-name">{product.name}</h3>
                        <FiStar size={10} className='icon'/>
                        <FiStar size={10} className='icon'/>
                        <FiStar size={10} className='icon'/>
                        <FiStar size={10} className='icon'/>
                        <FiStar size={10} className='icon'/>
                        <div className="price">
                        <p className="product-previous-price">{product.previousPrice} </p>
                        <p className="product-price">{product.price}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default ProductCart;
