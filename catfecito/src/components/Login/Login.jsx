import "./Login.css";

const Login = () => {
  return (
    <div className="login-div">
      <img className="catfecito-login" src="https://tecolotito.elsiglodetorreon.com.mx/i/2018/08/1090804.jpeg" alt="Catfecito Login" />
      <div className="form-login">
        <div className="input-field">
          <label className="label">Usuario</label>
          <input type="text" className="user-input" placeholder="Ingresa tu usuario" />
        </div>
        <div className="input-field">
          <label className="label">Contraseña</label>
          <input type="password" className="password-input" placeholder="Ingresa tu contraseña" />
        </div>
        <div className="button-group">
          <button className="login-button">Iniciar Sesión</button>
        </div>
      </div>
      <img className="cat-cafe-login" src="https://th.bing.com/th/id/OIP.ZvvFRvFS69Yc-DfE5_Zs3wHaJ4?rs=1&pid=ImgDetMain" alt="Cat Cafe Login" />
    </div>
  );
};

export default Login;
