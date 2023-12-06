import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";


const UpdateInventoryScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentInventoryEntry, setCurrentInventoryEntry] = useState();

  const [updatedInventoryEntry, setUpdatedInventoryEntry] = useState({
    itemName: "",
    bulk: "",
    type: "",
    // ... initialize other fields
  });

  const itemNameInputRef = useRef();
  const bulkInputRef = useRef();
  const typeInputRef = useRef();
  // ... add refs for other fields

  const handleChange = (event) => {
    const { target } = event;

    if (itemNameInputRef.current) {
      setUpdatedInventoryEntry((prevState) => ({
        ...prevState,
        itemName: itemNameInputRef.current.value,
      }));
    }
    if (bulkInputRef.current) {
      setUpdatedInventoryEntry((prevState) => ({
        ...prevState,
        bulk: bulkInputRef.current.value,
      }));
    }
    if (typeInputRef.current) {
      setUpdatedInventoryEntry((prevState) => ({
        ...prevState,
        type: typeInputRef.current.value,
      }));
    }
    // ... update other fields
  };

  const handleSubmitAndRedirect = () => {
    console.log("Submitting with ID:", id);
    console.log("Submitting data:", updatedInventoryEntry);
    const data = { updatedInventoryEntry, id };

    try {
      axios.put(`/api/inventory/${id}/update`, data);
    } catch (error) {
      console.error("there was an error sending update 😑", error.response.data);
    }

    navigate(`/`);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${id}`);
        setCurrentInventoryEntry(data.inventoryEntry);
      } catch (error) {
        console.error(error.response.data);
      }
    })();
  }, []);

  useEffect(() => {
    if (itemNameInputRef.current) {
      itemNameInputRef.current.value = currentInventoryEntry?.itemName || "";
    }
    if (bulkInputRef.current) {
      bulkInputRef.current.value = currentInventoryEntry?.bulk || "";
    }
    if (typeInputRef.current) {
      typeInputRef.current.value = currentInventoryEntry?.type || "";
    }
    // ... set other field values
  }, [
    currentInventoryEntry?.itemName,
    currentInventoryEntry?.bulk,
    currentInventoryEntry?.type,
    // ... add other dependencies
  ]);

  return (
    <form onSubmit={handleSubmitAndRedirect}>
      <label htmlFor="itemName">Item Name</label>
      <input ref={itemNameInputRef} name="itemName" onChange={handleChange} />

      <label htmlFor="bulk">Bulk</label>
      <input ref={bulkInputRef} name="bulk" onChange={handleChange} />

      <label htmlFor="type">Type</label>
      <input ref={typeInputRef} name="type" onChange={handleChange} />

      {/* ... add other fields */}
      
      <button type="submit">Update</button>
    </form>
  );
};


export default UpdateInventoryScreen;