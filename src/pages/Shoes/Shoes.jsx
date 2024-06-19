import { useNavigate } from "react-router-dom";
import { GetShoesData } from "../../api/GetShoesData";

const Shoes = () => {
  const { shoesData, loading } = GetShoesData();

  const navigate = useNavigate();

  const handleShoeClicked = (shoe) => {
    navigate(`/shoe/${shoe.id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="shoes-container">
      {shoesData.map((shoe) => (
        <div
          key={shoe.id}
          className="shoe-item"
          onClick={() => handleShoeClicked(shoe)

          }
        >
          <img src={shoe.image} alt={shoe.name} className="shoe-image" />
          <h1>{shoe.name}</h1>
          <div className="shoe-details">
            <p>$ {shoe.price}</p>
            <p className="shoe-description">{shoe.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Shoes;
