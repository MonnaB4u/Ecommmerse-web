import React, { useState } from 'react';
import Camera from '../Camera/Camera';
import DisLaptop from '../Laptop/DisLaptop';
import Laptop from '../Laptop/Laptop';
import NewDatasCard from '../NewProduct/NewDatasCard';
import SmartPhone from '../SmartPhone/SmartPhone';

const DiscountProducts = () => {

    const [Open, setOpen] = useState("Laptop")
    return (

        <div className="NewProduct my-5">
            <div className="container">
                <div className="row ">
                    <div className="col-sm mx-5">
                        <p className="mx-3 h4">Discount products</p>
                    </div>
                    <div className="text-end col-sm small">
                        <small onClick={() => setOpen("Laptop")} className="mx-3 h6">Laptop</small>
                        <small onClick={() => setOpen("Phone")} className="mx-3 h6">Smartphones</small>
                        <small onClick={() => setOpen("Camera")} className="mx-3 h6">Cameras</small>
                        <small onClick={() => setOpen("Accessories")} className="mx-3 h6">Accessories</small>
                    </div>

                </div>
                <div className="row my-3">
                    {Open === "Accessories" && <NewDatasCard ></NewDatasCard>}
                    {Open === "Phone" && <SmartPhone></SmartPhone>}
                    {Open === "Laptop" && <DisLaptop></DisLaptop>}
                    {Open === "Camera" && <Camera></Camera>}
                </div>
            </div>

        </div>
    );
};

export default DiscountProducts;
