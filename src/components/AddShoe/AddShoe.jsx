import { useState } from "react";
import { addShoe } from "../../api/GetShoesData";
import "./AddShoe.css"

const AddShoe = ({ onAdd, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    desc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newShoe = await addShoe(formData);
      onAdd(newShoe);
      setFormData({ name: "", price: "", image: "", desc: "" });
    } catch (error) {
      console.error("Failed to add shoe:", error);
    }
  };

  return (
    <div className="add-shoe-form">
      <h2>Add New Shoe</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
              className="shoe-item"
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="add-btns">

        <button type="submit">Add Shoe</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddShoe;
