import React from "react";
import { Container } from "react-bootstrap";
import TopNavbar from "../Components/NavBar/TopNavbar";


const Home = () => {

    const handleOnSubmit = (e) => {
        e.priventDefault();
    }

    
    return (
        <>
            <TopNavbar />
            <Container>
                <h4>Draw waves in paper, scan and Upload here ..</h4>
                <form onSubmit={handleOnSubmit}>
                    <input type="file" accept="image/*"/><br/><br/>
                    <input type="submit" />
                </form>
            </Container>
        </>
    )
}


export default Home;