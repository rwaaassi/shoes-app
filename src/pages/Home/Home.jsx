import { GetShoesData } from "../../api/GetShoesData";
import "./Home.css"

const Home = () => {
  const { shoesData, loading } = GetShoesData();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="shoes-container">
      {shoesData.map((shoe) => (
        <div key={shoe.id} shoe={shoe} className="shoe-item">
          <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            <h1>{shoe.name}</h1>
          
        </div>
      ))}
    </section>
  );
};
export default Home;
