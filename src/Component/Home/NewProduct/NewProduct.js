import './NewProduct.css'
import NewDatasCard from './NewDatasCard';
import SmartPhone from '../SmartPhone/SmartPhone';
import Laptop from '../Laptop/Laptop';
import Camera from '../Camera/Camera';
import { useState } from 'react';
const NewProduct = () => {

    const colors = {
        forest: {
            light: "#75b79e",
            dark: "#396454",
        },
        ocean: {
            light: "#7d9df5",
            dark: "#002ba1",
        },
        desert: {
            light: "#f2aaaa",
            dark: "#472e2e",
        },
    };


    const [Open, setOpen] = useState("Laptop")
console.log(Open)
    return (
        <div className="NewProduct my-5">
            <div className="container">
                <div className="row ">
                    <div className="col-sm mx-5">
                        <p className="mx-3 h4">New Product</p>
                    </div>
                    <div className="text-end col-sm small">
                        <small onClick={() => setOpen("Laptop")}  className="mx-3 h6">Laptop</small>
                        <small onClick={() => setOpen("Phone")} className="mx-3 h6">Smartphones</small>
                        <small onClick={() => setOpen("Camera")} className="mx-3 h6">Cameras</small>
                        <small onClick={() => setOpen("Accessories")} className="mx-3 h6">Accessories</small>
                    </div>
                </div>
                <div className="row my-3">
                    {Open === "Accessories" && <NewDatasCard ></NewDatasCard>}
                    {Open === "Phone" && <SmartPhone></SmartPhone>}
                    {Open === "Laptop" && <Laptop></Laptop>}
                    {Open === "Camera" && <Camera></Camera> }
                </div>
            </div>

        </div>
    );
};

export default NewProduct;
