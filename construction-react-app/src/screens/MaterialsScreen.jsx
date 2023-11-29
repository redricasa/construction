import React from "react";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";



const Materials = () => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState(0.0);
    const [type, setType] = useState('');
    const [bulk, setBulk] = useState('');
    const [condition, setCondition] = useState('');
    const [purchaseDate, setPurchaseDate] = useState(null);
    const [energyScore, setEnergyScore] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [purchaseOrderNo, setPurchaseOrderNo] = useState(0);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState(0);



    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();
    }

    const handlePriceChange = (event) => {
        // Ensure that the entered value is a valid number with up to two decimal places
        const inputValue = parseFloat(event.target.value);
        if (!isNaN(inputValue)) {
            setPrice(inputValue);
        }
    };

    const handleEnumChange = (setState, value) => {
        setState(value);
    };


    return (
        <>
            
        <form onSubmit={onSubmit}>
            
            <div className="container">
            <h3>Item Inventory</h3>
            <p>Materials: things that will become a part of the house</p>
            <p>Tools: used to build house and returned to inventory</p>
        
            <div className="row">
                
                <div className="col-sm">

                <label>Item Name</label>
                <input 
                    className="form-control"
                    type='text'
                    id='text'
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                ></input>

                <label htmlFor="bulkpurchase">Bulk Purchase</label>
                <select className="form-control form-control-sm" 
                    id="bulk"
                    value={bulk} 
                    onChange={(e) => handleEnumChange(setBulk, e.target.value)}>
                    <option>Yes</option>
                    <option>No</option>
                </select>

            
                <label>Purchase Date</label>
                <input className="form-control"
                    type='text'
                    id='text'
                    value={purchaseDate ? purchaseDate.toISOString().split('T')[0] : ''}
                    onChange={(e) => setPurchaseDate(new Date(e.target.value))}placeholder="YYYY-mm-dd"></input>

                <label>Energy Score</label>
                <input className="form-control"
                    type='text'
                    id='text'
                    value={energyScore}
                    onChange={(e) => setEnergyScore(e.target.value)}></input>

                <label>Purchase Order #</label>
                <input className="form-control"
                    type="number"
                    value={purchaseOrderNo} 
                    onChange={(e) => setPurchaseOrderNo(e.target.value)}></input>
            </div>

                
                
            <div className="container col-sm">

        
                <label htmlFor="materialOrTool">Type</label>
                <select className="form-control form-control-sm" 
                    id="type"
                    value={type} 
                    onChange={(e) => handleEnumChange(setType, e.target.value)}>
                    <option>Material</option>
                    <option>Tool</option>
                </select>

                <label>Price</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="number" 
                        className="form-control" 
                        aria-label="Amount (to the nearest dollar)"
                        // step="0.01" 
                        value={price} 
                        onChange={handlePriceChange}></input>
                </div>

                <label htmlFor="condition">Condition</label>
                <select className="form-control form-control-sm" 
                    id="condition"
                    value={condition} 
                    onChange={(e) => handleEnumChange(setCondition, e.target.value)}>
                    <option>Used</option>
                    <option>New</option>
                </select>

                <label>Quantity</label>
                <input className="form-control"
                    type="number"
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)}></input>

            
                <label htmlFor="address" className="form-label">
                    Address
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="street"
                    name="street"
                    placeholder="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
                
                <div className="row">
                    
                    <div className="col-5" >
                        <input
                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="form-control"
                        id="city"
                        name="city"
                        placeholder="city"

                        />
                    </div>
                    <div className="col-3">
                        <input
                        type='text'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="form-control"
                        id="state"
                        name="state"
                        placeholder="state"
                        />
                    </div>

                    <div className="col-3" >
                        <input
                        type="number"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        className="form-control"
                        id="zipcode"
                        name="zipcode"
                        placeholder="zip code"
                        />
                    </div>
                </div>
                
                </div>
            </div>
            <button type="submit" className="btn btn-info">
                Submit
            </button>
        </div>

            
        </form>
        </>
    );
};

export default Materials;
