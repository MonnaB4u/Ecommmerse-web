import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="mt-3 bg-dark bg">
            <div className="container d-flex justify-content-center">
                <div className="row">

                    <div className="col-sm my-4 bgc text-white">
                        <p className="h5 ">ABOUT US</p>
                        <small className="mt-3 text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</small>
                        <p href="" className="h6 mt-2 bgc">1734 Stonecoal Road</p>
                        <p href="h6" className="h6 bgc">+021-95-51-84</p>
                        <p href="h6" className="h6 bgc">email@email.com</p>
                    </div>

                    <div className="col-sm my-4  text-white">
                        <p className="h5 "> CATEGORIES</p>
                        <p href="" className="h6 bgc">Hot deals</p>
                        <p href="h6" className="h6 bgc">Laptops</p>
                        <p href="h6" className="h6 bgc">Smartphones</p>
                        <p href="h6" className="h6 bgc">Accessories</p>
                    </div>

                    <div className="col-sm my-4  text-white">
                        <p className="h5 ">INFORMATION</p>
                         <p href="" className="h6 bgc">About Us</p>
                        <p href="h6" className="h6 bgc">Contact Us</p>
                        <p href="h6" className="h6 bgc">Privacy Policy</p>
                        <p href="h6" className="h6 bgc">Orders and Returns</p>
                        <p className="h6 bgc">Terms & Conditions</p>
                    </div>

                    <div className="col-sm my-4  text-white">
                        <p className="h5 ">SERVICE</p>
                         <p href="" className="h6 bgc">My Account</p>
                        <p href="h6" className="h6 bgc">View Cart</p>
                        <p href="h6" className="h6 bgc">Wishlist</p>
                        <p href="h6" className="h6 bgc">Track My Order</p>
                        <p className="h6">Help</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
