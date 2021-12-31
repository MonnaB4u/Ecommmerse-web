import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import fakeData from '../../Data/index'
const ConfirmOrder = () => {
    const { conID } = useParams()
    console.log(conID)
    const product = fakeData.find(data => data.key.toString() === conID)
    console.log(product)
const navigation =useNavigate()
const handlebtohome=() => {
    navigation('/')
}
    return (
        <div className="container">
            <div className="box my-5">
                <div className="row">
                    <div className="border-right col-sm-3">
                        <img src={product.img} alt="" className="img-fluid mx-4" />
                    </div>
                    <div className=" m-3 col-sm">
                        <p className="h6">Product Name: {product.name}</p>
                        <p className="h4">Your Order is Confirmed</p>
                        <button onClick={()=>handlebtohome()} className="addCartbtn bg-danger text-white mt-5">Back To The Home</button>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default ConfirmOrder;
