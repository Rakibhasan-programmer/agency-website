import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import aboutPic from '../../images/about.jpg'

const About = () => {
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col sm={12} lg={6}>
                        <div>
                            <h4 className='fs-1 fw-bold'>What do we do?</h4>
                            <p className='fw-light py-3 fs-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                        </div>
                        <div>
                            <h4 className='fs-2'>Our Working Process :</h4>
                            <div className='pt-3'>
                                <h6>Designing</h6>
                                <ProgressBar className='mb-3' variant='danger' now={81} label={`${81}%`}/>
                                <h6>Managment</h6>
                                <ProgressBar className='mb-3'  variant='danger' now={72} label={`${72}%`}/>
                                <h6>Marketing</h6>
                                <ProgressBar className='mb-3'  variant='danger' now={89} label={`${89}%`}/>
                                <h6>Development</h6>
                                <ProgressBar className='mb-3'  variant='danger' now={71} label={`${71}%`}/>
                            </div>
                        </div>
                    </Col>
                    {/* another section */}
                    <Col sm={12} lg={6}>
                        <img className='img-fluid' src={aboutPic} alt="A girl" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;