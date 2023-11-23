import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


const Hero = () => {
    return (
        <>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <h6>Login or Register</h6>
            <form className=" text-center p-5 border border-dark rounded bg-dark">
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
                    

            </form>
        </div>

        </>

    )
}

export default Hero;