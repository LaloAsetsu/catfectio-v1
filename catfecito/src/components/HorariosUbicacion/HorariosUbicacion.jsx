import "./HorariosUbicacion.css";

const HorariosUbicacion = () => {
  return (
    <div className="HorariosUbicacionDiv">
      <h2 className="HorariosYUbicacion">Horarios y ubicación</h2>
      <div className="HorarioTexto">
        <span className="HorarioTitulo">Horario</span>
        <span className="HorarioDetalle">Martes a Domingo</span>
        <span className="HorarioDetalle">de 12:00 a 20:00 hrs.</span>
      </div>
    <iframe 
        title="Ubicación de Catfecito" 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1056.0006851207409!2d-99.17061454667093!3d19.405549903750906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6af81bbc01%3A0x2730088404fa512b!2sCatfecito!5e0!3m2!1ses-419!2smx!4v1741534038851!5m2!1ses-419!2smx"
        width="400" 
        height="300" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>

    </div>
  );
};

export default HorariosUbicacion;
