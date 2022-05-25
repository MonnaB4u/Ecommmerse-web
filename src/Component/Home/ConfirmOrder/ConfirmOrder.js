import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import fakeData from '../../Data/index'
import { useForm } from 'react-hook-form';
import Login from '../../Login/Login';
import Navbar from '../Navbar/Navbar';
const ConfirmOrder = () => {
    const { conID } = useParams()
    console.log(conID)
    // const product = fakeData.find(data => data.key.toString() === conID)
    // console.log(product)
    const navigation = useNavigate()
    const handlebtohome = () => {
        navigation('/')
    }
    const [loggedInusers, setLoggedInUsers] = useContext(UserContext);
    const navigate = useNavigate()

    const { register, handleSubmit, errors } = useForm()

    const [project, setData] = useState({})
    useEffect(() => {

        const url = `http://localhost:5000/ProductCollection/${conID}`
        const url1 = `http://localhost:5000/ProductCollection/${conID}`
        const url2 = `http://localhost:5000/laptopCollection/${conID}`
        const url3 = `http://localhost:5000/cameraCollection/${conID}`
        const url4 = `http://localhost:5000/smartPhoneCollection/${conID}`
        const url5 = `http://localhost:5000/ProductCollection/${conID}`

        fetch(url5)
            .then(res => res.json())
            .then(data => setData(data));

        fetch(url1)
            .then(res => res.json())
            .then(data => setData(data));

        fetch(url2)
            .then(res => res.json())
            .then(data => setData(data));

        fetch(url3)
            .then(res => res.json())
            .then(data => setData(data));
        fetch(url4)
            .then(res => res.json())
            .then(data => setData(data));

        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));

    }, [])

    const onSubmit = e => {
        const newData = { ...project };
        console.log("pro", e.projectName)
        newData.Customer = e.username;
        newData.email = e.email;
        newData.name = project.name;
        newData.status = "pending";
        newData.price = project.price;
        newData.address = e.address;

        delete newData._id;

        console.log("New", newData);
        fetch('http://localhost:5000/Order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Selected successfully, Wait for teacher approvement");
                    navigate('/orderReview')
                }
            }
            )
    }

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="container">
                <div className="box my-5">
                    <div className="row">
                        <div className="border-right col-sm-3">
                            <img src={project.img} alt="" className="img-fluid mx-4" />
                        </div>
                        <div className=" m-3 col-sm">
                            <p className="h4 border-bottom">Product Name:{project.name && project.name}  </p>
                            {/* <p className="h4 border-bottom">Your Order is Confirmed</p> */}
                            {/* <button onClick={() => handlebtohome()} className="addCartbtn bg-danger text-white mt-5">Back To The Home</button> */}
                        </div>
                    </div>
                </div>

                {/* Order Form  */}
                <div className="my-5 d-flex justify-content-center ">
                    <div className="col-md-8">

                        {/* onSubmit={handleSubmit(onSubmit)} */}
                        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
                            {/* <input {...register("firstName")} /> */}

                            <div className="d-flex flex-column">
                                <label className='text-start mx-4 h6' htmlFor="">Product Name</label>
                                <input className='input-style px-3 py-2 new4' value={project.name} {...register("name")} required />
                            </div>

                            <div className="d-flex flex-column">
                                <label className='text-start mx-4 h6' htmlFor="">Product Price</label>
                                <input className='input-style px-3 py-2 new4' value={project.price} {...register("price")} required />
                            </div>

                            <div className="d-flex flex-column">
                                <label className='text-start mx-4 h6' htmlFor="">User Name</label>
                                <input className=' input-style px-3 py-2 new4' value={loggedInusers.name} type="text" {...register("username")} required />
                            </div>

                            <div className="d-flex flex-column">
                                <label className='text-start mx-4 h6' htmlFor="">Email</label>
                                <input className='input-style px-3 py-2 new4' value={loggedInusers.email} {...register("email")} required type="text" />
                            </div>




                            <div className="d-flex flex-column">
                                <label className='text-start mx-4 h6' htmlFor="">Address</label>
                                <input className='input-style px-3 py-2' placeholder="please enter your address" {...register("address")} required type="text" />
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn addCartbtn bg-danger text-white mt-3 w-50 mb-4"><h5>Buy Now</h5></button>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default ConfirmOrder;
