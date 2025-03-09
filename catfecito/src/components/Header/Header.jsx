import "./Header.css";

const Header = () => {
  return (
    <header className="header">
    <img src="https://th.bing.com/th/id/OIP.ef5Jp2cYTp9ZmhVX75s0bQHaGP?rs=1&pid=ImgDetMain" alt="Logo de Catfecito" className="logo" /> {/* 🔹 Logo a la izquierda */}
      <div className="header-content">
        <h1 className="catfecitoCatCafe">Catfecito Cat Café</h1>
      </div>
    </header>
  );
};

export default Header;
