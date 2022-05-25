import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fakeData from '../../Data/laptop'
const DisLaptop = () => {

 const [product, setData] = useState([])
const dataa=[...product]
// const shuffle = a => {
//     for (let i = a.length; i; i--) {
//         let j = Math.floor(Math.random() * i);
//         [a[i - 0], a[j]] = [a[j], a[i - 0]];
//     }
// }

// shuffle(dataa);


    const navigate = useNavigate()
    useEffect(() => {
        const url = `http://localhost:5000/laptopCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    return (
        <div>
            <div className="">
                <div className="row mx-5">
                    {
                        dataa.slice(16,20).map((each, index) =>
                            <>
                                <div className="col-md-3 curs" onClick={() => { navigate(`/productDetils/${each._id}`) }} >
                                    <div className="box">
                                        <img src={each.img} alt="" />
                                        <p className=" h6 text-justify boxp">{each.name}</p>
                                        <div className="d-flex justify-content-between">
                                            <span>${each.price}</span>
                                            <i >{each.star}<span class="fa fa-star checked"></span></i>
                                            <span>Available - {each.stock}</span>
                                             <span>50%</span>
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

export default DisLaptop;
