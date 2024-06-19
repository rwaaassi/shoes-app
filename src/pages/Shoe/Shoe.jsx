import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetShoesData, deleteShoe, editShoe } from "../../api/GetShoesData";
import EditShoe from "../../components/EditShoe/EditShoe";

const Shoe = () => {
  const { shoeId } = useParams();
  const { shoesData, loading } = GetShoesData();
  const navigate = useNavigate();
  const [shoe, setShoe] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (!loading) {
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
    <div key={shoe.id} className="shoe-item">
      <img src={shoe.image} alt={shoe.name} className="shoe-image" />
      <h1>{shoe.name}</h1>
      <div className="shoe-details">
        <p>$ {shoe.price}</p>
        <p className="shoe-description">{shoe.desc}</p>
      </div>
      <div>
        <button onClick={() => setEditMode(true)}>Edit Shoe</button>
        <button onClick={handleDelete}>Delete Shoe</button>
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
