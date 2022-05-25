import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Cursore.css'
import Carousel from 'react-grid-carousel'
import fakeData from '../../Data/index'
import { useNavigate } from 'react-router-dom';
const Cursore = () => {

    const [dataa, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const url = `http://localhost:5000/ProductCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="carousels-part my-3">
            <Carousel cols={5} rows={1} gap={10} showDots loop >
                {dataa.map((val, i) => (
                    <Carousel.Item key={i} >
                        <Card className="slide" onClick={() =>  { navigate(`/productDetils/${val._id}`)}} >
                            <img className="img-fluid rounded" src={val.img} />
                            <div>
                                <p className="h6 text-center cname">{val.name}</p>
                                <div className="d-flex justify-content-between mx-4 my-2">
                                    <span className="text-success">${val.price}</span>
                                    <i >{val.star}<span class="fa fa-star checked"></span></i>
                                    <span className="text-success">Available: {val.stock}</span>
                                </div>
                            </div>
                            {/* <Mask /> */}
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>

    );
};

export default Cursore;
