import React from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../images/logo.png'

const Navigation = () => {
    return (
        <div>
            <Navbar bg='dark' className='py-2 shadow' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                    <img className="navbar-brand w-75" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link className="text-light" href="#action1">Home</Nav.Link>
                            <Nav.Link className="text-light" href="#action1">About</Nav.Link>
                            <Nav.Link className="text-light" href="#action1">Services</Nav.Link>
                            <Nav.Link className="text-light" href="#action1">Sponsers</Nav.Link>
                            <Nav.Link className="text-light" href="#action1">Contact</Nav.Link>
                            
                        </Nav>
                       
                            <Button className='text-light py-2 px-3' variant="outline-danger">Buy Now</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;