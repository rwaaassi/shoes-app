import { useParams, useNavigate } from "react-router-dom";
import { GetShoesData } from "../../api/GetShoesData";
import EditShoe from "../../components/EditShoe/EditShoe"

const Shoe = () => {
  const { shoeId } = useParams(); 
  const { shoesData, loading } = GetShoesData();

  if (loading) {
    return <div>Loading...</div>;
  }

  const shoe = shoesData.find((shoe) => shoe.id === Number(shoeId)); 

  if (!shoe) {
    return <div>Shoe not found</div>;
  }

//   const handelEditShoe = () => {

//   }

  return (
    <div key={shoe.id} className="shoe-item">
      <img src={shoe.image} alt={shoe.name} className="shoe-image" />
      <h1>{shoe.name}</h1>
      <div className="shoe-details">
        <p>$ {shoe.price}</p>
        <p className="shoe-description">{shoe.desc}</p>
      </div>
      <div>
          <button>
            Edit Shoe
            </button>
            <button>
            Delete Shoe
            </button>
      </div>
    </div>
    
  );
};

export default Shoe;
