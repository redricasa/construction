import React from "react";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-light bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Construction Inventory Management
                </a>
            
                <form className="container-fluid justify-content-start">
                    <button className="btn btn-outline-light me-2" type="button">
                        Tools
                    </button>
                    <button className="btn btn-outline-light" type="button">
                        Materials
                    </button>
                </form>
                {/* sign in/up start ---*/}
                <form className="container-fluid justify-content-start">
                    <button className="btn btn-outline-warning me-2" type="button">
                        Log In
                    </button>
                    <button className="btn btn-sm btn-outline-info" type="button">
                        Register
                    </button>
                </form>
            {/* sign in/up end--- */}
            </div>
        </nav>
        
        </>
    );
};

export default Navbar;
