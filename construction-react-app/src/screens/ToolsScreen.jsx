import React from 'react';

const Tools = () => {
  return (
    <>
            
        <form>
            {/* bulk purchase selection */}
            <div className="container">
            <h3>Tools Inventory</h3>
            <p>Tools: used to build house and returned to inventory</p>
            {/* row for the 2 columns */}
            <div className="row">
                {/* ---------- first column -------------- */}
                <div className="col-sm">

                <label>Item Name</label>
                <input className="form-control"></input>

                <label htmlFor="condition">Condition</label>
                <select className="form-control form-control-sm" id="condition">
                    <option>Used</option>
                    <option>New</option>
                </select>

                {/* <label>Person checking OUT</label>
                <input className="form-control"></input>

                <label>Date checked OUT</label>
                <input className="form-control" placeholder="YYYY-mm-dd"></input> */}

                <label>Amount Checked OUT</label>
                <input className="form-control"></input>

                <label>Purchase Order #</label>
                <input className="form-control"></input>
            </div>

                
                {/* ----------second column --------------- */}
            <div className="container col-sm">

                <label>Item ID</label>
                <input className="form-control"></input>

                <label>Price</label>
                <input className="form-control"></input>

                {/* <label>Person checking IN</label>
                <input className="form-control"></input> 

                <label>Date checked IN</label>
                <input className="form-control" placeholder="YYYY-mm-dd"></input> */}

                <label htmlFor="address" className="form-label">
                    Address
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="street"
                    name="street"
                    placeholder="street"
                />
                
                <div className="row">
                    
                    <div className="col-5" >
                        <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        placeholder="city"
                        />
                    </div>
                    <div className="col-3">
                        <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        placeholder="state"
                        />
                    </div>

                    <div className="col-3" >
                        <input
                        type="text"
                        className="form-control"
                        id="zipcode"
                        name="zipcode"
                        placeholder="zip code"
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
)}

export default Tools;