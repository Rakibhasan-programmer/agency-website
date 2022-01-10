import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import brand1 from '../../images/brand-01.png'
import brand2 from '../../images/brand-02.png'
import brand3 from '../../images/brand-03.png'
import brand4 from '../../images/brand-04.png'
import brand5 from '../../images/brand-05.png'
import brand6 from '../../images/brand-06.png'

const Sponser = () => {
    return (
        <div className='py-5'>
            <Container>
                <h4 className='fs-1 fw-bold text-center pb-5'>Sponsers <span className='text-danger'>Partner</span></h4>
                <Row className='py-3'>
                    <Col  className='py-3'><img src={brand1} alt="Brand Logo" /></Col>
                    <Col  className='py-3'><img src={brand2} alt="Brand Logo" /></Col>
                    <Col  className='py-3'><img src={brand3} alt="Brand Logo" /></Col>
                    <Col  className='py-3'><img src={brand4} alt="Brand Logo" /></Col>
                </Row>
                <Row className='py-3'>
                    <Col  className='py-3'><img src={brand5} alt="Brand Logo" /></Col>
                    <Col  className='py-3'><img src={brand6} alt="Brand Logo" /></Col>
                    <Col className='pb-3'><img src={brand2} alt="Brand Logo" /></Col>
                    <Col><img src={brand1} alt="Brand Logo" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Sponser;