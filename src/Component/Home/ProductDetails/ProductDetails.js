import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../Data/index'
import Cart from '../Cart/Cart';

import './ProductDetails.css'


const ProductDetails = () => {
    const { ID } = useParams()
    const Product = fakeData.find(data => data.key.toString() === ID)
    // console.log(Product)
    const [cart, setCart] = useState([])
    const handlecart = ((product) => {
        // setData(cart + 1)
        const pd = [...cart, product]
        setCart(pd)
    })

    return (
        <div className="product-details">
            <div className="row">
                <div className="col-sm-8 border-right  py-5">
                    <div className="d-flex mx-4 borderbox">
                        <img src={Product.img} className="img-fluid h-25 m-3" alt="" />
                        <div className="mx-3 mt-3">
                            <div className="list-group">
                                <span className="h6 ">{Product.name}</span>
                                <span className="mt-2">Price: ${Product.price}</span>
                                <span>Shippig: ${Product.shipping}</span>
                                <span>Available : {Product.stock}</span>
                                <small className="">Seller : {Product.seller}</small>
                            </div>
                            <div className="d-flex justify-content-end mb-4">
                                <button onClick={() => handlecart(Product)} className="addCartbtn bg-danger text-white mt-3 ">Add to Cart</button>
                                 {/* <button onClick={() => handlereduce(Product)} className="addCartbtn bg-danger text-white mt-3 ">Reduce to Cart</button> */}
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-sm-4">
                    <Cart cart={cart} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
