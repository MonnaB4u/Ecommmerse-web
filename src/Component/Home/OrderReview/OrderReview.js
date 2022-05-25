import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './orderStyle.css'
const OrderReview = () => {
    const [data, setData] = useState([])
    console.log(data)
    useEffect
        (() => {
            const url = 'http://localhost:5000/ordersCollection'
            fetch(url)
                .then(res => res.json())
                .then(data => setData(data))
        }, [])

    /////////////Delete/////
    const handleDeleteUser = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/ordersCollection/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(datas => {
                    if (datas.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remaining = data.filter(user => user._id !== id)
                        setData(remaining)
                    }
                })
        }
    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-center  ">Order Inventory</h2>
                <div className="d-flex justify-content-center mb-4">
                    <div className="border-bottom w-25 text-bottom border-info"></div>
                </div>
                <div className="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Customer Details</th>
                                <th scope="col">Product Images</th>
                                <th scope="col">Product Name</th>
                                <th scope="col" >Action</th>
                                <th scope="col" >Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(users =>

                                    <tr>
                                        <th className="col-3">{users._id}

                                            <ul>
                                                <li>Name:-{users.Customer}</li>
                                                <li>Email:-{users.email}</li>
                                                <li>Address:-{users.address}</li>
                                            </ul>
                                        </th>
                                        <td className="border col-2"> <img src={users.img} className="img-fluid " alt="" /> </td>
                                        <td className="border h6 col-2">{users.name}</td>

                                        <td class="col-2">
                                            <button onClick={() => handleDeleteUser(users._id)} className={`btn bg-danger m-3 text-white navimg ${users.status !== "approve" && "bg-warning"} `}> <h6>Cancel Order</h6></button>

                                        </td >
                                        <td class="col-4 border">

                                            {
                                                users.status === null ?
                                                    <h5>Your product is on the way</h5>

                                                    :
                                                    <h5 className="bg-danger text-white btnstyle">Wait for sellers approvement</h5>
                                            }

                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>

                    </table>
                    {
                        data.length === 0 &&
                        <div className=" ">
                            <div class="d-flex justify-content-center">
                                <div class="" role="status">
                                    <h2>You do not have any order history ! Plase Order Something</h2>
                                    {/* <span class="sr-only w-75 h-75"></span> */}
                                </div>
                            </div>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default OrderReview;
