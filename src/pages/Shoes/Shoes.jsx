import { GetShoesData } from "../../api/GetShoesData";

const Shoes = () => {
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
