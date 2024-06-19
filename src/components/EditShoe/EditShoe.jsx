import { useState } from "react";

const EditShoe = ({ shoe, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    name: shoe.name,
    price: shoe.price,
    image: shoe.image,
    desc: shoe.desc,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="edit-shoe-form">
      <h2>Edit Shoe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
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
            />
          </label>
        </div>
        <button type="submit">Update Shoe</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditShoe;
