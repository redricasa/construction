
import axios from "axios";

const API_URL = '/api/inventory/'

// create an inventory item
// {{baseURL}}/create
const createInv = async (inventoryData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,//associates userId with inventory entry
        },
    }
    // Include userId in the inventoryData payload
    const payload = {
        ...inventoryData, //TODO GET A SIMPLIFIED CODE FOR SPREAD
        userId: userId,
    };
    const res = await axios.post(API_URL + 'create', payload, config);
    return res.data;
}

//--- getAllInventoryByUser ---- GET ALL INVENTORY DISPLAYED ON SCREEN
const getAllInvByUser = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    
    const response = await axios.get(API_URL+ 'get', config)

    return response.data
}


// get single inventory by id
// {{baseURL}}/65646191f6f578b0f306a6c4 
const getInventory = async (inventoryId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.get(API_URL + inventoryId, config)

    return response.data
}

// update inventory
// {{baseURL}}/65646191f6f578b0f306a6c4/update
const updateInv = async (inventoryId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const res = await axios.put(API_URL + inventoryId + '/update', config)
}


const inventoryService = {
    updateInv,
    createInv,
    getInventory,
    getAllInvByUser
}

export default inventoryService;