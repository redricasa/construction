import {  Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import Inventory from '../screens/InventoryScreen';



const Hero = () => {
    const { userInfo } = useSelector((state) => state.auth);
    return (
        
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            { userInfo ? (
                <>
                    <Inventory />
                </>
                ) : (
                <>
            <h6>Login or Register</h6>
            <form className=" text-center p-5 border border-dark rounded bg-dark">
            
            <Container>
            
                <LinkContainer to='/login'>
                    <Nav.Link  >
                        <button className="btn btn-outline-warning me-2" type="button">
                            Log In
                        </button>
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/register'>
                    <Nav.Link >
                        <button className="btn btn-sm btn-outline-warning" type="button">
                            Register
                        </button>
                    </Nav.Link>
                </LinkContainer>
            </Container>        
            
            </form>
            </>
            )}
        </div>

    )
}

export default Hero;