const Inicio = () => {
  return (
    <section id="inicio" className="home">
      <div className="content">

          <div className="name">
            HOLA! SOY <span>NICOLÁS DUARTE</span>
          </div>
          <div className="content-front">
        <div className="front">PROGRAMADOR WEB FRONT END</div>
        </div>
        <br />
        <br />
        <div className="des">
          <div className="text">
          Desarrollador Front-End con experiencia en proyectospersonales y
          académicos, especializado en React y tecnologías web modernas.
          Apasionado por crear experiencias de usuario atractivas y eficientes.
          Busco oportunidades para aplicar mis habilidades en un entorno
          profesional.
          <br /> <br />
          Tras el tiempo que me tomé de seguir mejorando para adquirir mas
          experiencia, he tomado la decisión de reorientar mi carrera
          profesional con el ánimo de continuar aprendiendo y, también, aportar
          toda mi experiencia adquirida.
          </div>
          <div className="container-cv">
            <a
              className="cv"
              href="/CV Nicolás Iñaki Duarte Front-End.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mi Curriculum Vitae
            </a>
          </div>
        </div>
      </div>

      <div className="avatar">
        <div className="card">
          <img src="foto-nico.jpeg" alt="FOTO NICO" />
        </div>

        <div className="data">
          <ul>
            <li>
              <h3>Nombre Completo:</h3>
              <p>Nicolás Iñaki Duarte</p>
            </li>
            <li>
              <h3>Edad:</h3>
              <p>21 Años</p>
            </li>
            <li>
              <h3>Nacionalidad:</h3>
              <p>Argentina</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
