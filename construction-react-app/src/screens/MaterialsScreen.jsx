import React from "react";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";




const Materials = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    

    const onSubmit = e => {
        e.preventDefault();
    }

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
                <input 
                    className="form-control"
                    type='text'
                    id='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></input>

                <label htmlFor="bulkpurchase">Bulk Purchase</label>
                <select className="form-control form-control-sm" id="bulk">
                    <option>Yes</option>
                    <option>No</option>
                </select>

            
                <label>Purchase Date</label>
                <input className="form-control"
                    type='text'
                    id='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)} placeholder="YYYY-mm-dd"></input>

                <label>Energy Score</label>
                <input className="form-control"
                    type='text'
                    id='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}></input>

                <label>Purchase Order #</label>
                <input className="form-control"></input>
            </div>

                
                {/* ----------second column --------------- */}
            <div className="container col-sm">

        
                <label htmlFor="materialOrTool">Type</label>
                <select className="form-control form-control-sm" id="type">
                    <option>Material</option>
                    <option>Tool</option>
                </select>

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
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                
                <div className="row">
                    
                    <div className="col-5" >
                        <input
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="form-control"
                        id="city"
                        name="city"
                        placeholder="city"

                        />
                    </div>
                    <div className="col-3">
                        <input
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="form-control"
                        id="state"
                        name="state"
                        placeholder="state"
                        />
                    </div>

                    <div className="col-3" >
                        <input
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
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
    );
};

export default Materials;
