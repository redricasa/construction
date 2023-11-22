import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';



const Header = () => {
    return (
        <>
        <nav className="navbar sticky-top navbar-light bg-secondary">
            <div className="container-fluid ">
                <LinkContainer to='/'>
                    <Navbar.Brand className="navbar-brand" href="/">Construction Inventory Management</Navbar.Brand>
                </LinkContainer>

                {/* <div className="container-fluid justify-content-start "> */}
                <LinkContainer to='/tools'>
                    <Nav.Link >
                        <button className="btn btn-outline-light me-2" type="button">
                            Tools
                        </button>
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/materials'>
                    <Nav.Link >
                        <button className="btn btn-outline-light" type="button">
                            Materials
                        </button>
                    </Nav.Link>
                </LinkContainer>
                {/* </div> */}
                {/* sign in/up start ---*/}
                {/* <div className="container-fluid justify-content-start col">
                    <Nav.Link href='/login'>
                        <button className="btn btn-outline-warning me-2" type="button">
                            Log In
                        </button>
                    </Nav.Link>
                    <Nav.Link href='/register'>
                        <button className="btn btn-sm btn-outline-warning" type="button">
                            Register
                        </button>
                    </Nav.Link>
                </div> */}
            {/* sign in/up end--- */}
            </div>
        </nav>
        
        </>
    );
};

export default Header;
