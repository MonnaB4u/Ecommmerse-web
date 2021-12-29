import React from 'react';
import './NEWSLETTER.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const NEWSLETTER = () => {
    return (
        <div className="newsletter my-5">
            <div className="container">
                <div className="row ">
                    <div className="col text-center mt-5">
                        <p className="suft">Sign Up for the <small className="h4">NEWSLETTER</small></p>
                        <div className="d-flex justify-content-center">
                            <input type="text" className="subscribeinput border border-secondary" placeholder="Enter Your Email" />
                            <button className="subscribebtn"> <i class="fa fa-envelope mx-1"></i> Subscribe</button>
                        </div>
                    </div>
                    <div className=" text-center mb-5 mt-4 ">
                        < FaFacebookSquare className="mx-3 ibg"></FaFacebookSquare>
                        <FaInstagramSquare className="mx-3 ibg"/>
                        <FaTwitterSquare className="mx-3 ibg"/>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NEWSLETTER;
