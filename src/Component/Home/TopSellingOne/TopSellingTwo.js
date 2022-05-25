import React from 'react';
import img from '../../Data/YourPng.com - 700x700.png'
import TopSellingMain from './TopSellingMain';
const TopSellingTwo = () => {
    return (
        <div className="mx-5 my-5 d-flex justify-content-center">
            <div class="container">
                <div class="row tex-center">
                    <div class="col-sm-3 mx-5">
                        <p className="h6 mx-5 line">Recommended</p>
                        <TopSellingMain></TopSellingMain>
                    </div>

                    <div class="col-sm-3 mx-5 ">
                        <p className="h6  mx-5 line">Top Trending</p>
                        <TopSellingMain></TopSellingMain>
                    </div>
                    <div class="col-sm-3 mx-5">
                        <p className="h6 mx-5 line">New Products</p>
                        <TopSellingMain></TopSellingMain>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSellingTwo;
