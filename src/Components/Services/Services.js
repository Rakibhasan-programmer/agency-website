import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div className='py-5'>
            <Container>
                <h4 className='fs-1 fw-bold text-center'>Our Service</h4>
                <p className='text-center fw-light fs-5 py-3'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                <Row className='py-4'>
                    <Col sm={12} lg={4} className='py-4'>
                        <Card className='p-4 text-center shadow'>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2">Mobile App development</Card.Subtitle>
                                <Card.Text>
                                    Mobile application development is the process of creating software applications that run on a mobile device.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4} className='py-4'>
                        <Card className='p-4 text-center shadow'>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2">Website development</Card.Subtitle>
                                <Card.Text>
                                Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4} className='py-4'>
                        <Card className='p-4 text-center shadow'>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2">Cyber Security</Card.Subtitle>
                                <Card.Text>
                                Cyber security is the application of technologies, processes and controls to protect systems from cyber attacks.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={4} className='pb-4'>
                        <Card className='p-4 text-center shadow'>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2">Mobile App development</Card.Subtitle>
                                <Card.Text>
                                    Mobile application development is the process of creating software applications that run on a mobile device.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4} className='pb-4'>
                        <Card className='p-4 text-center shadow'>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2">Website development</Card.Subtitle>
                                <Card.Text>
                                Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4}>
                        <Card className='p-4 text-center shadow'>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2">Cyber Security</Card.Subtitle>
                                <Card.Text>
                                Cyber security is the application of technologies, processes and controls to protect systems from cyber attacks.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;