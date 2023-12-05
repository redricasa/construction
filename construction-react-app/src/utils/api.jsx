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
        console.error('Error: ', error);
        throw error;
    }
};

const deleteEntry = async (id) => {
    try {
        await axios.delete(`/api/inventory/${itemId}/delete`);
        console.log('Item deleted 👍🏾');
    } catch (error) {
        console.error('Error deleting entry:', error);
    }
}

export {
    fetchUserInventory,
    updateEntry,
    deleteEntry
};
