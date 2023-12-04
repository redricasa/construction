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

const updateEntry = async (id, data ) => {
    try {
        const response = await axios.put(`/api/inventory/${id}/update`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};


export {
    fetchUserInventory,
    updateEntry
    
};
