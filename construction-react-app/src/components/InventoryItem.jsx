import { useDispatch } from 'react-redux'
// TODO import {updateInventory} from inventorySlice

function InventoryItem({ inventory }) {
    const dispatch = useDispatch()

    return (
        <div className="item">
            <div>{new Date(inventory.createdAt).toLocaleString('en-US')}</div>
            <button onClick={() => dispatch(updateInventory(inventory._id))} className='update'>
                Update
            </button>
        </div>
    )

}

export default InventoryItem