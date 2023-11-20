import React from "react";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-light bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Construction Inventory Management
                </a>
                
                
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            Home
                            </a>
                        </li>
                    
                    </ul>
                    
                </div>
            </div>
            {/* sign in/up start ---*/}
            <form className="container-fluid justify-content-start">
            <button className="btn btn-outline-warning me-2" type="button">
                Log In
            </button>
            <button className="btn btn-sm btn-outline-warning" type="button">
                Register
            </button>
            </form>
            {/* sign in/up end--- */}
        </nav>
        
        </>
    );
};

export default Navbar;
