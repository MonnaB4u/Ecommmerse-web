import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Cursore.css'
import Carousel from 'react-grid-carousel'
import fakeData from '../../Data/index'
const Cursore = () => {
    const caruselData = fakeData.slice(0, 10)
    const [dataa, setData] = useState(caruselData)

    return (
        <div className="carousels-part my-3">
            <Carousel cols={5} rows={1} gap={10} showDots loop >
                {dataa.map((val, i) => (
                    <Carousel.Item key={i} >
                        <Card className="slide">
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
