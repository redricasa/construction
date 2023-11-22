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

        <>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h4>Log into your Account</h4>
            <form className=" text-center p-5 border ">
                
                <label>Email address</label>
                <input type="email" className="form-control"  placeholder="Enter email"></input>

                <label>Password</label>
                <input type="password" className="form-control"  placeholder="Password"></input>
        
            </form>
        </div>
        
        
        </>
    )


}

export default LoginUser;