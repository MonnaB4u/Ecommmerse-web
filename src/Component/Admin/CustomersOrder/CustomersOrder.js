import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import AdminNav from '../adminHome.js/AdminNav';


const CustomersOrder = () => {
    const [data, setData] = useState([])

    useEffect
        (() => {
            const url = 'http://localhost:5000/ordersCollection'
            fetch(url)
                .then(res => res.json())
                .then(data => setData(data))
        }, [])

    /////////////Delete/////
    const handleDeleteUser = id => {
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
    /////////////Update/////
    const [user] = useState({ "status": "approved" })
    const updateOrder = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/ordersCollection/${id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ user }),

            }
        )
            .then(res => res.json())

            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Approved Successfully')
                    window.location.reload()
                }
            })
    };
    return (
        <div>
            <AdminNav></AdminNav>
            <div>
                <h2 className="text-center  ">All Projects</h2>
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
                                        <td className="border h6 ">{users.name}</td>

                                        <td class="col-2">
                                            <button onClick={() => handleDeleteUser(users._id)} className={`btn bg-danger  navimg ${users.status !== "approve" && "bg-warning"} `}> <h6>Delete</h6></button>


                                        </td>
                                        <td className="border  col-2">
                                            {
                                                users.status === null ?
                                                    <button className="btn btn-success navimg mx-2">  <h6>Yeah Approved</h6></button>
                                                    :
                                                    <button onClick={() => updateOrder(users._id)} className="btn btn-success navimg mx-2">  <h6>Not Approved :(</h6></button>
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
                                <div class="spinner-border" role="status">
                                    <span class="sr-only w-75 h-75"></span>
                                </div>
                            </div>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default CustomersOrder;
