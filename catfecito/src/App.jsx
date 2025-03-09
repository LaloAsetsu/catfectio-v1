import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Cats from "./components/Cats";
import HorariosUbicacion from "./components/HorariosUbicacion";

function App() {
  return (
    <div>
      <Header />
      <Login />
      <Menu />
      <Cats />
      <HorariosUbicacion />
    </div>
  );
};

export default App;