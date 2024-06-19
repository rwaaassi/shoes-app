import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetShoesData, addShoe as apiAddShoe } from "../../api/GetShoesData";
import AddShoe from "../../components/AddShoe/AddShoe";

const Shoes = () => {
  const { shoesData, loading } = GetShoesData();
  const [addMode, setAddMode] = useState(false);
  const [allShoes, setAllShoes] = useState(shoesData);
  const navigate = useNavigate();

  useEffect(() => {
    setAllShoes(shoesData);
  }, [shoesData]);

  const handleShoeClicked = (shoe) => {
    navigate(`/shoe/${shoe.id}`);
  };

  const handleAddShoe = async (newShoe) => {
    try {
      const addedShoe = await apiAddShoe(newShoe);
      setAllShoes([...allShoes, addedShoe]);
      setAddMode(false);
    } catch (error) {
      console.error("Failed to add shoe:", error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="shoes-container">
      {allShoes.map((shoe) => (
        <div
          key={shoe.id}
          className="shoe-item"
          onClick={() => handleShoeClicked(shoe)}
        >
          <img src={shoe.image} alt={shoe.name} className="shoe-image" />
          <h1>{shoe.name}</h1>
          <div className="shoe-details">
            <p>$ {shoe.price}</p>
            <p className="shoe-description">{shoe.desc}</p>
          </div>
        </div>
      ))}
      {addMode ? (
        <AddShoe onAdd={handleAddShoe} onCancel={() => setAddMode(false)} />
      ) : (
        <button onClick={() => setAddMode(true)}>Add Shoe</button>
      )}
    </section>
  );
};

export default Shoes;
