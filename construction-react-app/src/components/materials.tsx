import React from "react";

const Materials = () => {
    return (
        <>
            
        <form>
            {/* bulk purchase selection */}
            <div className="container">
            <h3>Materials Inventory</h3>
            <p>Materials: things that will become a part of the house</p>
            {/* row for the 2 columns */}
            <div className="row">
                {/* ---------- first column -------------- */}
                <div className="col-sm">

                <label>Item Name</label>
                <input className="form-control"></input>

                <label htmlFor="bulkpurchase">Bulk Purchase</label>
                <select className="form-control" id="bulk">
                    <option>Yes</option>
                    <option>No</option>
                </select>

                <label>Location</label>
                <input className="form-control"></input>

                <label>Purchase Date</label>
                <input className="form-control"></input>

                <label>Energy Score</label>
                <input className="form-control"></input>

                <label>Person checking OUT</label>
                <input className="form-control"></input>

                <label>Date checked OUT</label>
                <input className="form-control"></input>

            </div>

                
                {/* ----------second column --------------- */}
            <div className="container col-sm">

                <label>Item ID</label>
                <input className="form-control"></input>

                <label>Price</label>
                <input className="form-control"></input>

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
