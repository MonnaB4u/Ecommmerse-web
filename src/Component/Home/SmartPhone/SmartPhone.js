import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fakeData from '../../Data/android'
const SmartPhone = () => {
    // const slicenewPro = fakeData.slice(0, 4)

    // const [data, setData] = useState(slicenewPro)
    // const navigate = useNavigate()

    const [dataa, setData] = useState([])
    console.log(dataa)
    const navigate = useNavigate()
    useEffect(() => {
        const url = `http://localhost:5000/smartPhoneCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <div className="">
                <div className="row mx-5">

                    {
                        dataa.length ===0 ? <h4>Data is Coming</h4> :
                        dataa.slice(0,4).map((each, index) =>
                            <>
                                <div className="col-md-3 curs" onClick={() => { navigate(`/productDetils/${each._id}`) }} >
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
        </div>
    );
};

export default SmartPhone;
