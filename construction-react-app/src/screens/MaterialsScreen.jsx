import React from "react";

const Materials = () => {
    return (
        <>
            
        <form>
            {/* bulk purchase selection */}
            <div className="container">
            <h3>Item Inventory</h3>
            <p>Materials: things that will become a part of the house</p>
            <p>Tools: used to build house and returned to inventory</p>
            {/* row for the 2 columns */}
            <div className="row">
                {/* ---------- first column -------------- */}
                <div className="col-sm">

                <label>Item Name</label>
                <input className="form-control"></input>

                <label htmlFor="bulkpurchase">Bulk Purchase</label>
                <select className="form-control form-control-sm" id="bulk">
                    <option>Yes</option>
                    <option>No</option>
                </select>

                <label htmlFor="materialOrTool">Type</label>
                <select className="form-control form-control-sm" id="type">
                    <option>Material</option>
                    <option>Tool</option>
                </select>

                {/* <label>Location</label>
                <input className="form-control"></input> */}

                <label>Purchase Date</label>
                <input className="form-control" placeholder="YYYY-mm-dd"></input>

                <label>Energy Score</label>
                <input className="form-control"></input>

                {/* <label>Person checking OUT</label>
                <input className="form-control"></input>

                <label>Date checked OUT</label>
                <input className="form-control" placeholder="YYYY-mm-dd"></input> */}

            </div>

                
                {/* ----------second column --------------- */}
            <div className="container col-sm">

                {/* <label>Item ID</label>
                <input className="form-control"></input> */}

                <label>Price</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"></input>
                </div>

                <label htmlFor="condition">Condition</label>
                <select className="form-control form-control-sm" id="condition">
                    <option>Used</option>
                    <option>New</option>
                </select>

                <label>Quantity</label>
                <input className="form-control"></input>

                <label>Purchase Order #</label>
                <input className="form-control"></input>

                {/* street address entry start*/}
                <label htmlFor="address" className="form-label">
                    Address
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="street"
                    name="street"
                    placeholder="street"
                    // value={address.street}
                    // onChange={handleChange}
                />
                
                <div className="row">
                    
                    <div className="col-5" >
                        <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        placeholder="city"
                        // value={address.city}
                        // onChange={handleChange}
                        />
                    </div>
                    <div className="col-3">
                        <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        placeholder="state"
                        // value={address.state}
                        // onChange={handleChange}
                        />
                    </div>

                    <div className="col-3" >
                        <input
                        type="text"
                        className="form-control"
                        id="zipcode"
                        name="zipcode"
                        placeholder="zip code"
                        // value={address.zipcode}
                        // onChange={handleChange}
                        />
                    </div>
                </div>
                {/* street address entry end */}
                </div>
            </div>
            <button type="button" className="btn btn-info">
                Submit
            </button>
        </div>

            {/* submit button */}
        </form>
        </>
    );
};

export default Materials;
