import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


const TopNavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand href="#home">Detect Parkinson's Disease</Navbar.Brand>

                    <Nav defaultActiveKey="/home" as="ul"
                        className="me-auto my-3 my-lg-0"
                        style={{ maxHeight: '100px' }}>

                        <Link className="nav-item" to='/wave'>Wave drawing</Link>
                        &nbsp;
                        <Link className="nav-item" to='/spiral' >Spiral drawing</Link>

                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    )
}

export default TopNavbar