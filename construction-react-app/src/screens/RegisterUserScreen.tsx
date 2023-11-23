import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from "../components/FormContainer";


const Register = () => {
    
    const [name, setName]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');


    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('submit');
        
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