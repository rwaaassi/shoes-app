import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetShoesData, deleteShoe, editShoe } from "../../api/GetShoesData";
import EditShoe from "../../components/EditShoe/EditShoe";
import "./Shoe.css";

const Shoe = () => {
  const { shoeId } = useParams();
  const { shoesData, loading } = GetShoesData();
  const navigate = useNavigate();
  const [shoe, setShoe] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (!loading && shoesData) {
      const shoeToEdit = shoesData.find((shoe) => shoe.id === Number(shoeId));
      setShoe(shoeToEdit);
    }
  }, [loading, shoeId, shoesData]);

  const handleUpdate = async (updatedShoe) => {
    try {
      const updated = await editShoe(shoe.id, updatedShoe);
      setShoe(updated);
      setEditMode(false);
    } catch (error) {
      console.error("Failed to update shoe:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteShoe(shoe.id);
      navigate("/shoes");
    } catch (error) {
      console.error("Failed to delete shoe:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!shoe) {
    return <div>Shoe not found</div>;
  }

  return (
    <div key={shoe.id} className="shoe-container">
      <img src={shoe.image} alt={shoe.name} className="shoe-image" />
      <div className="shoe-details">
        <h1>{shoe.name}</h1>
        <p className="shoe-price">$ {shoe.price}</p>
        <p className="shoe-desc">{shoe.desc}</p>
        <div className="btns">
          <button onClick={() => setEditMode(true)}>Edit Shoe</button>
          <button onClick={handleDelete}>Delete Shoe</button>
        </div>
      </div>
      {editMode && (
        <EditShoe
          shoe={shoe}
          onUpdate={handleUpdate}
          onCancel={() => setEditMode(false)}
        />
      )}
    </div>
  );
};

export default Shoe;
