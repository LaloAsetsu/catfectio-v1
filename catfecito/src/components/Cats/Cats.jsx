import { useState, useEffect } from "react";
import "./Cats.css";

const Cats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cats") 
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) => console.error("Error fetching cats:", error));
  }, []);

  return (
    <div className="CatsDiv">
      <h2 className="CatsTitle">Conoce nuestros gatos</h2>
      <div className="CatsItems">
        {cats.map((cat) => (
          <div key={cat.id} className="ProductInfoCard">
            <img src={cat.imageUrl} alt={cat.name} />
            <h3 className="CatName">{cat.name}</h3>
            <p className="CatDescription">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cats;
