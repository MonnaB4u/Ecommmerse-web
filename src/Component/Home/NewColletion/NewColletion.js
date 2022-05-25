import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './newCollection.css'
const NewColletion = () => {
    const [dataa, setData] = useState([])
    console.log(dataa)
    const navigate = useNavigate()

    useEffect(() => {
        const url = `http://localhost:5000/ProductCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
       <div className="">
           <Navbar></Navbar>
            <div className="container">
            <div className="item">
            {
                dataa.length===0 ? <div className="text-center"> <h1 >Please Wait.......</h1> </div>  :
                dataa.map((each, i) =>
                    <div className="row m-3">
                        <div class="card" style={{width: "20rem"}}>
                            <img src={each.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">{each.name}</h4>
                                <h6>{each.price}</h6>

                                <a onClick={() => navigate(`/productDetils/${each._id}`)} href="#" class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        </div>
       </div>
    );
};

export default NewColletion;
