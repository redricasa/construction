import React from "react";

const Materials = () => {
    return (
        <>
        <form>
            {/* bulk purchase selection */}
            <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Bulk Purchase</label>
            <select className="form-control" id="bulk">
                <option>Yes</option>
                <option>No</option>
            </select>
            </div>
            {/* condition selection */}
            <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Condition</label>
            <select className="form-control form-control-sm" id="condition">
                <option>Used</option>
                <option>New</option>
            </select>
            </div>

            {/* street address entry start*/}
            <div className="container mt-12">
            <div className="mb-8">
                <label htmlFor="street" className="form-label">
                Street
                </label>
                <input
                type="text"
                className="form-control"
                id="street"
                name="street"
                // value={address.street}
                // onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="city" className="form-label">
                City
                </label>
                <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                // value={address.city}
                // onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="state" className="form-label">
                State
                </label>
                <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                // value={address.state}
                // onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="zipcode" className="form-label">
                Zipcode
                </label>
                <input
                type="text"
                className="form-control"
                id="zipcode"
                name="zipcode"
                // value={address.zipcode}
                // onChange={handleChange}
                />
            </div>
            
            {/* street address entry end */}
            {/* submit button */}
            <button type="button" className="btn btn-info">
            Submit
            </button>
            </div>
        </form>
        </>
    );
};

export default Materials;
