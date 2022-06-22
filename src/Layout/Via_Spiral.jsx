import React, { useEffect, useState } from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";
import { sendTestImage } from "../Actions/DiagnoseAction";
import TopNavbar from "../Components/NavBar/TopNavbar";


const Via_Spiral = () => {

    const [formData, setFormData] = useState();
    useEffect(() => {
        sendTestImage();
    }, [])
    

    const previewSelectedData = () => {
        const select_image = document.getElementById('select_image');

        const file = select_image.files[0];

        if (file) {

            const preview_image = document.getElementById('preview_image');

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.addEventListener('load', (e) => {
                preview_image.src = e.target.result;
                setFormData({ ...formData, ['image']: e.target.result })
            })
        }
    }

    const handleOnSubmit = (e) => {
        e.priventDefault();
    }


    return (
        <>
            <TopNavbar />
            <Container>
                <Row>

                    {/* ---------- select image file ---------- */}

                    <Col >
                            <h4>Draw waves in paper, scan and Upload here ..</h4>
                            <input id="select_image" type='file' accept="image/*" onChange={previewSelectedData} />
                            <br/><br/>
                            <label>Diagonise : &nbsp;</label>
                            <input type="submit" />
                    </Col>

                    {/* ---------- preview Image ---------- */}
                    <Col>
                        <h5>Preview Uploaded</h5>
                        <Row className="mt-5">
                            <h3>Preview</h3>

                            <Figure >
                                <Figure.Image
                                    id='preview_image'
                                    width='100%'
                                    alt="select image"
                                />
                                <Figure.Caption className="d-flex justify-content-center" style={{ color: 'green' }}>
                                    Selected image
                                </Figure.Caption>
                            </Figure>
                        </Row>
                        {/* ---------- preview Image ends here ---------- */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Via_Spiral;