import React from 'react';
import { useForm } from 'react-hook-form';
import AdminNav from '../adminHome.js/AdminNav';

const AddNewProduct = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Project added successfully");
                }
            }
            )
    }
    return (

        <div>
            <AdminNav></AdminNav>
            <div className="">

                <div className="col-md-8">
                    <div className="mt-5 pt-5 w-50  container ">
                        <div className="border bg-gray pt-5 mt-5 rounded">

                            <div className="mx-4 px-4 mb-5">
                                <h4 className="m-2">Add new Product</h4>
                                <form onSubmit={handleSubmit(onSubmit)} className="">
                                    <input {...register("img")} className="form-control " placeholder="Product Image Link" />
                                    <input {...register("name")} className="form-control " placeholder="Name of Product" />
                                    <input {...register("price")} className="form-control my-3" placeholder="Product price" />
                                    <input {...register("cetagory")} className="form-control " placeholder="Product cetagory" />
                                    <input type="submit" className="btn btn-primary mt-4" />
                                </form>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;
