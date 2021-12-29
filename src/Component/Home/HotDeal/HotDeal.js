import React from 'react';
import './HotDeal.css'
import img from '../../Data/YourPng.com - 700x700.png'
const HotDeal = () => {
    return (
        <div>
            <div className="my-5 hothealbg">
                <div className="container">
                    <div className="row">
                        <div class="col mt-5 mx-4">
                            <img className="img-fluid" src="https://www.pikpng.com/pngl/b/305-3052305_rog-gaming-laptop-asus-rog-zephyrus-s-clipart.png" alt="" />
                        </div>
                        <div class="col">
                            <div className="d-flex mt-5 mb-3">
                                <p className="mx-3 h4 time text-white rounded-circle">02  <small className="insidesmall">Days</small></p>
                                <small className="mx-3 h4 text-white time rounded-circle">10 <small className="insidesmall">HOURS</small></small>
                                <small className="mx-3 h4 text-white time rounded-circle">34 <small className="insidesmall">MINS</small></small>
                                <small className="mx-3 h4 text-white time rounded-circle">60 <small className="insidesmall">SECS</small></small>
                            </div>
                            <div className="text-center mb-4">
                                <p className="hdtw h2">HOT DEAL THIS WEEK</p>
                                <p className="ncuto">NEW COLLECTION UP TO 50% OFF</p>
                                <button className="shopbtn text-white h6">Shop Now</button>
                            </div>
                        </div>
                        <div class="col">
                        <img className="img-fluid" src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotDeal;
