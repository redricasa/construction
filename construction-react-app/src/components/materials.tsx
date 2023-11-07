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
        </form>

        <button type="button" className="btn btn-info">
            Submit
        </button>
        </>
    );
};

export default Materials;
