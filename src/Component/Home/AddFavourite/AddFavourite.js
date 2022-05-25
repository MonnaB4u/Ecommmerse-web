import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const AddFavourite = () => {
    const [localData] = useState(() => {
        const saved = localStorage.getItem("product");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    const handleRemove = (e) => {
    //     const currentCart = [e];
    // delete currentCart[e._id];
    // localStorage.removeItem(e._id, JSON.stringify(currentCart));
        localStorage.removeItem("product", JSON.stringify(e));
     window.location.href = window.location.href;
    }
    return (
        <div>
            <Navbar></Navbar>
           {
               !localData ?
               <div className="text-center m-4"><h2>No Data Found</h2> </div>:
                <div className="container">
                            <div className="box my-5">
                                <div className="row">
                                    <div className="border-right col-sm-3">
                                        <img src={localData.img} alt="" className="img-fluid mx-4" />
                                    </div>
                                    <div className=" m-3 col-sm">
                                        <p className="h4 border-bottom">Product Name:{localData.name && localData.name}  </p>
                                        {/* <p className="h4 border-bottom">Your Order is Confirmed</p> */}
                                        <button onClick={() => handleRemove(localData)} className="addCartbtn bg-danger text-white mt-5">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
           }

        </div>
    );
};

export default AddFavourite;
