import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';




const Header = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall ] = useLogoutMutation();
    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap;
            dispatch(logout());
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <header>
        <nav className="navbar sticky-top navbar-light bg-danger">
            <div className="container-fluid ">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand className="navbar-brand" >Construction Inventory Management</Navbar.Brand>
                    </LinkContainer>

                    <Nav className='ms-auto' >
                        { userInfo ? (
                            <>
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item >
                                            Profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={ logoutHandler }>
                                        Log out
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
                    
                    <LinkContainer to='/materials'>
                        <Nav.Link >
                            <button className="btn btn-outline-light" type="button">
                                Inventory
                            </button>
                        </Nav.Link>
                    </LinkContainer>
                    
                    
                    </Nav>
        
                </Container>
            </div>
        </nav>
        
        </header>
    );
};

export default Header;
