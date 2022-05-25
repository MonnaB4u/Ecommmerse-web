import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../Data/index'
import Cart from '../Cart/Cart';

import './ProductDetails.css'


const ProductDetails = () => {
    const { ID } = useParams()
    const Products = fakeData.find(data => data.key.toString() === ID)


    const [Product, setData] = useState([])




    // console.log("hello", Product)
    useEffect(() => {
        const url1 = `http://localhost:5000/ProductCollection/${ID}`
        const url2 = `http://localhost:5000/laptopCollection/${ID}`
        const url3 = `http://localhost:5000/cameraCollection/${ID}`
        const url4 = `http://localhost:5000/smartPhoneCollection/${ID}`
        fetch(url1)
            .then(res => res.json())
            .then(data => setData(data))

        fetch(url2)
            .then(res => res.json())
            .then(data => setData(data))
        fetch(url3)
            .then(res => res.json())
            .then(data => setData(data))
        fetch(url4)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const [cart, setCart] = useState([])
    const handlecart = ((product) => {
        const pd = [...cart, product]
        setCart(pd)
    })
    //////////// set Data in localStorage

    const [local, setLocal] = useState([])
    const [message, setmessage] = useState("")
    const handleAddFav = (e) => {
        localStorage.setItem("product", local.length < 1 ? JSON.stringify(e) : setmessage("product already exist"));
        // const pd = [...local, e]
        // setLocal(pd)
    }



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
                                <button onClick={() => handleAddFav(Product)} className="addCartbtn bg-danger text-white mt-3 mx-3 ">Add to Favourite</button>
                                <button onClick={() => handlecart(Product)} className="addCartbtn bg-danger text-white mt-3 ">Add to Cart</button>

                            </div>
                            <small className="text-danger">{message}</small>
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
