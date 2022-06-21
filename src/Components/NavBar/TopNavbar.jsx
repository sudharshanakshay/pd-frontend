import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";


const TopNavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand href="#home">Detect Parkinson's Disease</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Wave drawing</Nav.Link>
                        <Nav.Link href="#features">Spiral drawing</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    )
}

export default TopNavbar