import React, { useState } from 'react';
import './NewProduct.css'
import fakeData from '../../Data/newP'
import { useNavigate } from 'react-router-dom';
import './NewProduct.css'

const NewDatasCard = () => {
    const slicenewPro = fakeData.slice(0, 4)
    const [data, setData] = useState(slicenewPro)
    const navigate = useNavigate()
    return (
        <div className="">
            <div className="row mx-5">
                {
                    data.map((each, index) =>
                        <>
                            <div className="col-md-3 curs" onClick={() =>{ navigate(`/productDetils${each.key}`)}} >
                                <div className="box">
                                    <img src={each.img} alt="" />
                                    <p className=" h6 text-justify boxp">{each.name}</p>
                                    <div className="d-flex justify-content-between">
                                        <span>${each.price}</span>
                                        <i >{each.star}<span class="fa fa-star checked"></span></i>
                                        <span>Available - {each.stock}</span>
                                    </div>
                                </div>
                            </div>
                        </>

                    )
                }
            </div>
        </div>
    );
};

export default NewDatasCard;
