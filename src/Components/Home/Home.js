import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import Sponser from '../Sponser/Sponser';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Sponser></Sponser>
            <Footer></Footer>
        </div>
    );
};

export default Home;