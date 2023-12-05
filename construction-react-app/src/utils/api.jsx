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

const updateEntry = async (id, updatedData ) => {
    try {
        const response = await axios.put(`/api/inventory/${id}/update`, updatedData);

        return response.data;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
};

const deleteEntry = async (itemId) => {
    try {
        await axios.delete(`/api/inventory/${itemId}/delete`);
        console.log('Item deleted 👍🏾');
    } catch (error) {
        console.error('Error deleting entry: ', error);
    }
}

export {
    fetchUserInventory,
    updateEntry,
    deleteEntry
};
