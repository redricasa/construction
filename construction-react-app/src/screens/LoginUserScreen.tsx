import {useState} from "react";
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from "../components/FormContainer";


const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('submit');
        
    }

    return (

        <FormContainer>
            <div className="d-flex justify-content-center align-items-center min-vh-100 row">
            <h4>Log into your Account</h4>
            <Form className=" text-center p-5 border col" onSubmit={ submitHandler }>
                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit"  variant='primary' className="mt-3">
                    Sign In 
                </Button>

                <Row className="py-3">
                    <Col>
                    Don't have an account? <Link to='/register'>Register</Link>
                    </Col>
                </Row>
            </Form>
        </div>

        </FormContainer>
        
    )


}

export default LoginUser;