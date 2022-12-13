import { Container,Row,Col } from "reactstrap";
import React from "react";

const Footer = ()=>{
    return(
        <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                   copyright &copy; ImyEye
                </Col>
            </Row>
        </Container>
        </footer>
    );
}

export default Footer;