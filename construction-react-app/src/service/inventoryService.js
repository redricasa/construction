
import axios from "axios";

const API_URL = '/api/material'

// create an inventory item
// {{baseURL}}/create
const createInventory = async (inventoryData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const res = await axios.post(API_URL, inventoryData, config);
    return res.data;
}

// get inventory by id
// {{baseURL}}/65646191f6f578b0f306a6c4 
const getInventory = async (inventoryId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.get(API_URL, config)

    return response.data
}

// update inventory
// {{baseURL}}/65646191f6f578b0f306a6c4/update
const updateInventory = async (inventoryId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const res = await axios.put(API_URL)
    
}


const inventoryService = {
    updateInventory,
    createInventory,
    getInventory
}

export default inventoryService;