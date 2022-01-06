import React from 'react';
import { Button } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div className='background mb-5' style={{ height: '88vh' }}>
            <div className='text-light fw-bold pt-5 px-4'>
                <p>WE ARE AGENCY</p>
                <h1 className='fs-1 fw-bold'>TECHNOLOGY & INNOVATION <br /> FOR AGENCY SERVICES.</h1>
                <Button className='fs-5 mt-3 py-3 px-4' variant='danger'>CONTACT US</Button>
            </div>
        </div>
    );
};

export default Header;