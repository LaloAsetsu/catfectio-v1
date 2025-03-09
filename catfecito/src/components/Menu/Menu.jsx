import { useEffect, useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu") 
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error al obtener el menú:", error));
  }, []);

  return (
    <div className="menu-div">
      <h1 className="menu-title">Menú</h1>
      <div className="menu-container">
        <table className="menu-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Menu;
