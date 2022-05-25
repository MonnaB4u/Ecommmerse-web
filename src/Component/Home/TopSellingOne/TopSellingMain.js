import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fakeData from '../../Data/index'
import './top.css'
const TopSellingMain = () => {
    const slicedata = fakeData.slice(0, 3)
    const [data] = useState(slicedata)
   const navigate = useNavigate()
    return (
        <div className="container">
            {
                data.map((each, index) =>
                    <>
                        <div className="d-flex c my-3 curs" onClick={() =>{ navigate(`/productDetils/${each.key}`)}}>
                            <img className="img-fluid m-3" src={each.img} alt="" />
                            <div className="">
                                <small className="bg-light">{each.category}</small>
                                <p className="h6 text-justify ct">{each.name}</p>
                                <small className="h5 text-danger">${each.price}</small>
                            </div>
                        </div>

                    </>

                )
            }
        </div>
    );
};

export default TopSellingMain;
