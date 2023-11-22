import React from 'react';

const Register = () => {
    return (
        <>
        
        <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h4>Register New Account</h4>
            <form className=" text-center p-5 border ">
                <label>Name</label>
                <input className="form-control" placeholder="Enter your full name"></input>
                
                <label>Email address</label>
                <input type="email" className="form-control"  placeholder="Enter email"></input>

                <label>Password</label>
                <input type="password" className="form-control"  placeholder="Password"></input>
        
            </form>
        </div>
        </>
    )


}

export default Register;