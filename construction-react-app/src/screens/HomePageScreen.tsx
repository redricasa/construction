import React from 'react';

const Home = () => {
    return (
        <>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <form className=" text-center p-5 border border-dark rounded bg-dark">
        {/* <form className="container-fluid justify-content-start"> */}
            <button className="btn btn-outline-warning me-2" type="button">
                Log In
            </button>
            <button className="btn btn-sm btn-outline-info" type="button">
                Register
            </button>
            </form>
        </div>

        </>

    )
}

export default Home;