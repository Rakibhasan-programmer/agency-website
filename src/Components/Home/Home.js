import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;