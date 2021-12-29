import React from 'react';
import NewDatasCard from '../NewProduct/NewDatasCard';

const TopSellingOne = () => {
    return (
       <div className="NewProduct my-5">
            <div className="container">
                <div className="row ">
                    <div className="col-sm mx-5">
                        <p className="mx-3 h4">Top Selling</p>
                    </div>
                    <div className="text-end col-sm small">
                        <small className="mx-3 h6">Laptop</small>
                        <small className="mx-3 h6">Smartphones</small>
                        <small className="mx-3 h6">Cameras</small>
                        <small className="mx-3 h6">Accessories</small>
                    </div>
                </div>
                <div className="row my-3">
                    <NewDatasCard ></NewDatasCard>
                </div>
            </div>

        </div>
    );
};

export default TopSellingOne;
