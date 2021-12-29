import React from 'react';
import Cursore from '../Cursore/Cursore';
import Footer from '../Footer/Footer';
import HotDeal from '../HotDeal/HotDeal';
import Navbar from '../Navbar/Navbar';
import NewProduct from '../NewProduct/NewProduct';
import NEWSLETTER from '../NEWSLETTER/NEWSLETTER';
import TopSellingOne from '../TopSellingOne/TopSellingOne';
import TopSellingTwo from '../TopSellingOne/TopSellingTwo';

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <Cursore></Cursore>
            <NewProduct></NewProduct>
            <HotDeal></HotDeal>
            <TopSellingOne></TopSellingOne>
            <TopSellingTwo></TopSellingTwo>
            <NEWSLETTER></NEWSLETTER>
            <Footer></Footer>
        </div>
    );
};

export default Header;
