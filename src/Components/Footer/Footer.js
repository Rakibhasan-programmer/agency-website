import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='pt-5'>
            <Container fluid style={{backgroundColor: 'black'}} className='py-5'>
                <Row className='d-flex align-items-center'>
                    <Col><img src={logo} alt="Logo" /></Col>
                    <Col><p className='text-light'>Copyright © 2021 <span className='text-danger'>Rakibul Hasan</span>. All Rights Reserved.</p></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;