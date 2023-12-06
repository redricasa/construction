import React from "react";
import { useEffect, useState } from 'react'
import axios from 'axios';
import { fetchUserInventory } from '../utils/api'
import { useNavigate } from "react-router-dom";


const Inventory = () => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState(0.0);
    const [type, setType] = useState('');
    const [bulk, setBulk] = useState('');
    const [condition, setCondition] = useState('');
    const [purchaseDate, setPurchaseDate] = useState(null);//TODO test new Date
    const [energyScore, setEnergyScore] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [purchaseOrderNo, setPurchaseOrderNo] = useState(0);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState(0);
    
    const navigate = useNavigate();
    const [inventoryItems, setInventoryItems] = useState([])
    const [selectedItemId, setSelectedItemId] = useState(null);

    const [updateForm, setUpdateForm] = useState({
        itemName: '',
        price: 0.0,
        purchaseDate: '',
        purchaseOrderNo: 0,
        quantity: 0,
        street: '',
        state:'',
        city:'',
        zipcode:'',
        energyScore:0,
        condition: 'Used',
        type: 'Material',
        bulk: 'Yes',
    });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUserInventory();
                setInventoryItems(data);
            } catch (error) {
                console.log("Error with useEffect's fetchData ---> ", error);
            }
        };
        
        fetchData();
    }, [])
    // Edit button of first form
    const handleUpdateClick = async (itemId) => {
        // TODO  -> get item by id
        try {
            const response = await axios.get(`/api/inventory/${itemId}`)
            console.log("get one item by id successful! 😊", response);
            
            setUpdateForm({
                itemName: response.data.itemName,
                price: response.data.price,
                purchaseDate: response.data.purchaseDate,
                purchaseOrderNo: response.data.purchaseOrderNo,
                quantity: response.data.quantity,
                street: response.data.street,
                state: response.data.state,
                city: response.data.city,
                zipcode: response.data.zipcode,
                energyScore: response.data.energyScore,
                condition: response.data.condition,
                type: response.data.type,
                bulk: response.data.bulk,
            });
            setSelectedItemId(itemId);
        } catch (error) {
            console.error('Error getting one item by _id or returning response.data: ', error);
            throw error;
        }
    
    };

    const deleteEntry = async (itemId) => {
        try {
            await axios.delete(`/api/inventory/${itemId}/delete`);
            console.log('Item deleted successfully!');

            setInventoryItems((inventoryItems) => inventoryItems.filter(item => item._id !== itemId));
            
            setSelectedItemId(null);
            
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    };
    // TODO -> prepopulate in a separate form on the same page
    const onSave = async (e) => {
        
        e.preventDefault();
        if (!selectedItemId) {
            console.error('selectedItemId is null or undefined');
            return;
        }

        try {
            console.log("item id---> ", selectedItemId);//no access to data returned by handleUpdateClick
            await axios.put(`/api/inventory/${selectedItemId}/update`, {
                itemName: updateForm.itemName,
                price: updateForm.price,
                type: updateForm.type,
                bulk: updateForm.bulk,
                purchaseDate: updateForm.purchaseDate,
                purchaseOrderNo: updateForm.purchaseOrderNo,
                quantity: updateForm.quantity,
                energyScore: updateForm.energyScore,
                state: updateForm.state,
                street: updateForm.street,
                zipcode: updateForm.zipcode,
                city: updateForm.city,
                condition: updateForm.condition,
            });
            console.log("successful update! Finally! 🙏🏾");
        } catch (error) {
            console.error("there was an error sending update 😑", error);
        }
    }
    
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

    const formatDate = (dateString) => {
        if (!dateString) return '';

        const date = new Date(dateString);
        
        if (isNaN(date.getTime())) {
            // Invalid date, return an empty string or handle accordingly
            return '';
        }

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
            <p> * make sure to select a Bulk Purchase, Type and Condition</p>
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
                Save
            </button>
        </div>
            
        </form>

        <section className='content'>
            {inventoryItems.length > 0 ? (
                <div className="card-container">
                    <h6>Here are the inventory entries you've made</h6>
                { inventoryItems.map((item) => (
                    <div className="card" key={item._id}>
                        <div className="card-body">
                            <h5 className="card-title">{item.itemName}</h5>
                            <p className="card-text">Price: ${item.price} </p>
                            <p className="card-text">Bulk: {item.bulk} </p>
                            <p className="card-text">Type: {item.type} </p>
                            {/* <p className="card-text">Price: {item.energyScore} </p>
                            <p className="card-text">Price: {item.condition} </p>
                            <p className="card-text">Price: {item.quantity} </p>
                            <p className="card-text">Price: {item.zipcode} </p>
                            <p className="card-text">Price: {item.city} </p>
                            <p className="card-text">Price: {item.state} </p>
                            <p className="card-text">Price: {item.street} </p>
                            <p className="card-text">Price: {item.purchaseDate} </p>
                            <p className="card-text">Price: {item.purchaseOrderNo} </p> */}
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-warning" 
                            onClick={() => handleUpdateClick(item._id)}>
                            Edit
                        </button>

                        <button 
                            type="submit" 
                            className="btn btn-danger"
                            onClick={() => deleteEntry(item._id)}>
                            Delete
                        </button>
                    </div>))
                }
                </div>

            ) : (
                <h3>You have not entered any materials/tools 😗</h3>
            )}
        </section>
        

        <form onSubmit={onSave}>
            
            <div className="container">
            <h3>Edit Inventory</h3>
            <p>Materials: things that will become a part of the house</p>
            <p>Tools: used to build house and returned to inventory</p>
            <p> * make sure to select a Bulk Purchase, Type and Condition</p>
            <div className="row">
                
                <div className="col-sm">

                <label htmlFor="itemName">Item Name</label>
                <input 
                    className="form-control"
                    type='text'
                    id='itemName'
                    value={updateForm.itemName}
                    onChange={(e) => setUpdateForm({ ...updateForm, itemName: e.target.value })}
                ></input>

                <label htmlFor="bulk">* Bulk Purchase</label>
                <select className="form-control form-control-sm" 
                    id="bulk"
                    value={updateForm.bulk} 
                    onChange={(e) => setUpdateForm({ ...updateForm, bulk: e.target.value })}
                    >
                    <option selected>Is it a bulk purchase?</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>

                <label htmlFor="purchase">Purchase Date</label>
                <input
                    className="form-control"
                    type="date"
                    id="purchase"
                    value={updateForm.purchaseDate ? formatDate(updateForm.purchaseDate) : ''}
                    onChange={(e) => setUpdateForm({ ...updateForm, purchaseDate: new Date(e.target.value) })}
                    placeholder="YYYY-mm-dd"
                />


                <label htmlFor="energyScore">Energy Score</label>
                <input className="form-control"
                    type='number'
                    id='energyScore'
                    value={updateForm.energyScore}
                    onChange={(e) => setUpdateForm({ ...updateForm, energyScore: e.target.value })}
                    ></input>

                <label htmlFor="purchaseorderno">Purchase Order #</label>
                <input className="form-control"
                    type="number"
                    value={updateForm.purchaseOrderNo} 
                    id='purchaseorderno'
                    onChange={(e) => setUpdateForm({ ...updateForm, purchaseOrderNo: e.target.value })}
                    ></input>
            </div>

            <div className="container col-sm">

                <label htmlFor="type">* Type</label>
                <select className="form-control form-control-sm" 
                    id="type"
                    value={updateForm.type} 
                    onChange={(e) => setUpdateForm({ ...updateForm, type: e.target.value })}
                    >
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
                        value={updateForm.price} 
                        // onChange={handlePriceChange}
                        onChange={(e) => setUpdateForm({ ...updateForm, price: e.target.value })}
                        ></input>
                </div>

                <label htmlFor="condition">* Condition</label>
                <select className="form-control form-control-sm" 
                    id="condition"
                    value={updateForm.condition} 
                    onChange={(e) => setUpdateForm({ ...updateForm, condition: e.target.value })}
                    >
                    <option selected>Choose inventory condition</option>
                    <option>Used</option>
                    <option>New</option>
                </select>

                <label htmlFor="quantity">Quantity</label>
                <input className="form-control"
                    type="number"
                    value={updateForm.quantity} 
                    id='quantity'
                    onChange={(e) => setUpdateForm({ ...updateForm, quantity: e.target.value })}
                    ></input>

            
                <label  className="form-label">
                    Address
                
                <input
                    type="text"
                    className="form-control"
                    id="street"
                    name="street"
                    placeholder="street"
                    value={updateForm.street}
                    onChange={(e) => setUpdateForm({ ...updateForm, street: e.target.value })}
                />
                
                <div className="row">
                    
                    <div className="col-5" >
                        <input
                        type='text'
                        value={updateForm.city}
                        onChange={(e) => setUpdateForm({ ...updateForm, city: e.target.value })}
                        className="form-control"
                        id="city"
                        name="city"
                        placeholder="city"
                        />
                    </div>
                    <div className="col-3">
                        <input
                        type='text'
                        value={updateForm.state}
                        onChange={(e) => setUpdateForm({ ...updateForm, state: e.target.value })}
                        className="form-control"
                        id="state"
                        name="state"
                        placeholder="state"
                        />
                    </div>

                    <div className="col-3" >
                        <input
                        type="number"
                        value={updateForm.zipcode}
                        onChange={(e) => setUpdateForm({ ...updateForm, zipcode: e.target.value })}
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
            <button type="submit" className="btn btn-success">
                Save edited item
            </button>
        </div>
            
        </form>

    
        </>
    );
};

export default Inventory;
