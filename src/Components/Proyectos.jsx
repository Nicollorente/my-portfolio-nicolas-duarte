
import React from "react";
import { useState } from "react";

const Proyectos = () => {
  const [listProyectos] = useState([
    {
      nombre: "Alma Nails",
      des: "Primer Proyecto de diseño de uñas",

      img: "alma-nails.jpeg",
      link:"https://almanails.netlify.app/"
    },
    {
      nombre: "Alma Nails (Services)",
      des: "Segundo Proyecto de diseño de uñas enfocado en sus servicios",
      img: "project-alma-nails-services.png",
      link:"https://alma-nails-card.netlify.app/"
    }
    ,
    {
      nombre: "Charrua Sports",
      des: "E-commerce de Ropa",
      img: "charrua-sports.jpeg",
      link:"https://charruasports.netlify.app/"
    },

    {
      nombre: "Esta largo! Barberia",
      des: "Diseñé y desarrollé un sitio web para destacar los mejores barberos de Ramos Mejía.",
      img: "esta-largo-barberia.jpeg",
      link:"https://esta-largo-barberia.netlify.app/"
    },

    {
      nombre: "Good Food Maker",
      des: "E-commerce de dietética",
      img: "good-food-maker.jpeg",
      link:"https://good-food-maker.netlify.app/"
    },
    {
      nombre: "The Coffee Store",
      des: "Tienda de café",
      img: "the-coffee-store.jpeg",
      link:"https://the-coffee-store-nicolas-duarte.netlify.app/"
    },
    {
      nombre: "Las 7 Maravillas del Mundo",
      des: "Página web que muestra información sobre las 7 maravillas del mundo",
      img: "las-7-maravillas-del-mundo.jpeg",
      link:"https://las-7-maravillas-del-mundo.netlify.app/"
    },
  ]);
  return (
    <section id="proyectos" className="projects" >
      <div className="titulo-principal">
      <div className="title">
        Proyectos
      </div>
      <div className="des">
        Además de las habilidades que adquirí durante mis estudios, he tenido la
        oportunidad de aplicar y desarrollar estas mismas a través de una serie
        de proyectos prácticos. A continuación, me gustaría compartir algunos de
        estos proyectos que reflejan mi experiencia y habilidades en acción.
        Desde mis inicios, hasta el presente.
      </div>
      </div>

      <div className="list" >
        {listProyectos.map((value, key) => (
          <div key={key} className="item">
            <div className="images">
              <a href={value.link} target="_blank"> 
              <img src={value.img} alt="imagenes de proyectos"/>
              </a>
            </div>
            <div className="content">
              <h3>{value.nombre}</h3>
              <p>({value.des})</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
