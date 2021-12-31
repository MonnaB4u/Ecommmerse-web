import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ProductDetails from './ProductDetails';

const ProduchDetailsmain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ProductDetails></ProductDetails>
            <div className="pt-5 mt-5">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default ProduchDetailsmain;
