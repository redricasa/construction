import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from "../slices/authSlice";
import {toast} from 'react-toastify'


const Register = () => {
    
    const [name, setName]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ register, { isLoading}] = useRegisterMutation();
    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo])

    

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('passwords do not match')
        } else {
            try {
                const res = await register({name, email, password, confirmPassword }).unwrap();
                dispatch(setCredentials({...res}));
                navigate('/');
            } catch (error) {
                toast.error(err?.data?.message || err.error);
            }
        }
        
    }

    return (

        <>
            <div className="d-flex justify-content-center align-items-center min-vh-100 row">
            <h4>Create a new Account</h4>
            <Form className=" text-center p-5 border col" onSubmit={ submitHandler }>
                <Form.Group className="my-2" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter name"
                        value={name}
                        onChange={ (e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={ (e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit"  variant='primary' className="mt-3">
                    Register
                </Button>

                <Row className="py-3">
                    <Col>
                    Already have an account? <Link to='/login'>Login</Link>
                    </Col>
                </Row>
            </Form>
            </div>
        </>
        
    )


}

export default Register;