import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';



const Header = () => {
    return (
        <header>
        <nav className="navbar sticky-top navbar-light bg-secondary">
            <div className="container-fluid ">
                <LinkContainer to='/'>
                    <Navbar.Brand className="navbar-brand" >Construction Inventory Management</Navbar.Brand>
                </LinkContainer>

                
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
        
                {/* sign in/up start ---*/}
                <LinkContainer to='/login'>
                    <Nav.Link >
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
            {/* sign in/up end--- */}
            </div>
        </nav>
        
        </header>
    );
};

export default Header;
