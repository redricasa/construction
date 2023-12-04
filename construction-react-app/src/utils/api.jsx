import axios from 'axios';



const fetchUserInventory = async () => {
    try {
        const response = await axios.get('/api/inventory/get');
        return response.data;
    } catch (error) {
        console.error('Error fetching user inventory:', error);
        throw error;
    }
};



export {
    fetchUserInventory,

    
};
