import {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import {toast} from 'react-toastify';



const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading}] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({...res}));
            navigate('/');
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
        
    }

    return (
        <>
        <div className="d-flex justify-content-center align-items-center min-vh-100 row">
            <h4>Log into your Account</h4>
            <Form className=" text-center p-5 border" onSubmit={ submitHandler }>
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
                    Don't have an account? <Link to='/register'>Register</Link>
            </Form>
        </div>
        </>

    )


}

export default LoginUser;