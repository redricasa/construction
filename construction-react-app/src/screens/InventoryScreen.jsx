import React from "react";
import { useEffect } from 'react'
import { useState } from 'react';
// import { useDispatch } from "react-redux";
// import {createInventory, reset} from '../slices/inventorySlice'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Inventory = () => {
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

    // const dispatch = useDispatch()
    // TODO -----display all user entered inventory to select for updating--------------------------------------
    useEffect(() => {

    }, 
    [
        // user, navigate, isError, message, dispatch
    ])


    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {
            
            await axios.post('/api/inventory/create', {
                itemName,price,type,bulk, purchaseDate, purchaseOrderNo, quantity, energyScore, state, street, zipcode, city, condition
            });

            console.log('Dispatch successful! 😗');
        } catch (error) {
            console.error('Error dispatching: 😑', error);
        }

        setItemName('')
        setPrice(0.0)
        setPurchaseDate('')
        setEnergyScore(0)
        setQuantity(0)
        setPurchaseOrderNo(0)
        setCity('')
        setState('')
        setZipcode(0)
        setStreet('')
    }

    const handlePriceChange = (event) => {
        const inputValue = parseFloat(event.target.value);
        if (!isNaN(inputValue)) {
            setPrice(inputValue);
        }
    };

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };


    return (
        <>
            
        <form onSubmit={onSubmit}>
            
            <div className="container">
            <h3>Item Inventory</h3>
            <p>Materials: things that will become a part of the house</p>
            <p>Tools: used to build house and returned to inventory</p>
            <p>* make sure to select a Bulk Purchase, Type and Condition</p>
            <div className="row">
                
                <div className="col-sm">

                <label htmlFor="itemName">Item Name</label>
                <input 
                    className="form-control"
                    type='text'
                    id='itemName'
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                ></input>

                <label htmlFor="bulk">* Bulk Purchase</label>
                <select className="form-control form-control-sm" 
                    id="bulk"
                    value={bulk} 
                    onChange={(e) => setBulk( e.target.value)}>
                    <option selected>Is it a bulk purchase?</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>

                <label htmlFor="purchase">Purchase Date</label>
                <input
                    className="form-control"
                    type="date"
                    id="purchase"
                    value={purchaseDate ? formatDate(purchaseDate) : ''}
                    onChange={(e) => setPurchaseDate(new Date(e.target.value))}
                    placeholder="YYYY-mm-dd"
                />


                <label htmlFor="energyScore">Energy Score</label>
                <input className="form-control"
                    type='number'
                    id='energyScore'
                    value={energyScore}
                    onChange={(e) => setEnergyScore(e.target.value)}></input>

                <label htmlFor="purchaseorderno">Purchase Order #</label>
                <input className="form-control"
                    type="number"
                    value={purchaseOrderNo} 
                    id='purchaseorderno'
                    onChange={(e) => setPurchaseOrderNo(e.target.value)}></input>
            </div>

                
                
            <div className="container col-sm">

        
                <label htmlFor="type">* Type</label>
                <select className="form-control form-control-sm" 
                    id="type"
                    value={type} 
                    onChange={(e) => setType( e.target.value)}>
                    <option selected>Choose inventory type</option>
                    <option>Material</option>
                    <option>Tool</option>
                </select>

                <label htmlFor="price">Price</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="number" 
                        className="form-control" 
                        aria-label="Amount (to the nearest dollar)"
                        id='price'
                        // step="0.01" 
                        value={price} 
                        onChange={handlePriceChange}></input>
                </div>

                <label htmlFor="condition">* Condition</label>
                <select className="form-control form-control-sm" 
                    id="condition"
                    value={condition} 
                    onChange={(e) => setCondition( e.target.value)}>
                    <option selected>Choose inventory condition</option>
                    <option>Used</option>
                    <option>New</option>
                </select>

                <label htmlFor="quantity">Quantity</label>
                <input className="form-control"
                    type="number"
                    value={quantity} 
                    id='quantity'
                    onChange={(e) => setQuantity(e.target.value)}></input>

            
                <label  className="form-label">
                    Address
                
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
                </label>
                </div>
            </div>
            <button type="submit" className="btn btn-info">
                Submit
            </button>
        </div>

            
        </form>
        <section className='content'>
            {/* {inventory.length > 0 ? (
                <div className='inventory'>
                    {inventory.map((item) => (
                    <InventoryItem key={item._id} item={item} />
                    ))}
                </div>
            ) : (
                <h3>You have not entered any materials/tools 😗</h3>
            )} */}
        </section>

        </>
    );
};

export default Inventory;
