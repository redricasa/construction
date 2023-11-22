import { Container, Row, Col } from 'react-bootstrap';


const FormContainer: React.FC<{ children: React.ReactNode }> = ( { children }) => {
    return (
        <Container>
            <Row className='justify-content-md-center mt-5'>
                <Col xs={12}>
                
                </Col>
            </Row>
        </Container>

    )
}
export default FormContainer;