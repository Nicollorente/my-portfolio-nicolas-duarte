
import React from "react";
import { useState } from "react";

const Proyectos = () => {
  const [listProyectos] = useState([
    {
      nombre: "Alma Nails",
      des: "Mi primer Proyecto en diseño de uñas",
      img: "alma-nails.jpeg",
      link:"https://almanails.netlify.app/",
      tec:"Tecnologías: HTML | CSS"
    },
    {
      nombre: "Alma Nails (Services)",
      des: "Segundo Proyecto de diseño de uñas enfocado en sus servicios",
      img: "project-alma-nails-services.png",
      link:"https://alma-nails-card.netlify.app/",
      tec:" Tecnologías: HTML | CSS | JAVASCRIPT"
    }
    ,

    {
      nombre: "The Coffee Store",
      des: "Desarrollé una tienda que muestra una variedad de tipos de café junto con sus precios. Además, la plataforma permite a los usuarios explorar y ver  batidos y comidas.",
      img: "the-coffee-store.jpeg",
      link:"https://the-coffee-store-nicolas-duarte.netlify.app/",
      tec: "Tecnologías: HTML | CSS"
    },

    {
      nombre: "Charrua Sports",
      des: "Desarrollé un e-commerce de ropa como proyecto personal, en el que los usuarios pueden explorar y seleccionar prendas. Este proyecto demuestra mi capacidad para diseñar y desarrollar plataformas de comercio electrónico funcionales.",
      img: "charrua-sports.jpeg",
      link:"https://charruasports.netlify.app/",
      tec: "Tecnologías: HTML | CSS | JAVASCRIPT"
    },

    {
      nombre: "Esta largo! Barberia",
      des: "Desarrollé una aplicación para una barbería donde los usuarios pueden solicitar turnos de manera fácil y rápida. Al seleccionar el servicio deseado, los usuarios son redirigidos a una página específica para reservar su turno, mejorando la experiencia del cliente y optimizando la gestión de citas.",
      img: "esta-largo-barberia.jpeg",
      link:"https://esta-largo-barberia.netlify.app/",
      tec: "Tecnologías: HTML | CSS | REACT JS | VITE | CHAKRA UI"
    },

    {
      nombre: "Good Food Maker",
      des: "Desarrollé una plataforma de e-commerce especializada en productos de dietética, que incluye un sistema de gestión de usuarios e integración con Firebase Firestore para almacenamiento de datos. En esta plataforma, los usuarios pueden agregar productos al carrito de compras y, al proceder al checkout, se les solicita registrarse. ",
      img: "good-food-maker.jpeg",
      link:"https://good-food-maker.netlify.app/",
      tec: "Tecnologías: HTML | CSS | JAVASCRIPT | REACT JS | VITE | FIREBASE | CHAKRA UI"
    },
    {
      nombre: "Las 7 Maravillas del Mundo",
      des: "Este proyecto presenta una experiencia visual y educativa que destaca los paisajes de las 7 maravillas del mundo. Cada maravilla es acompañada por una narrativa histórica detallada que proporciona contexto y profundidad a su significado y relevancia cultural.",
      img: "las-7-maravillas-del-mundo.jpeg",
      link:"https://las-7-maravillas-del-mundo.netlify.app/",
      tec:"Tecnologías: HTML | CSS | JAVASCRIPT"
    },
  ]);
  return (
    <section id="proyectos" className="projects">
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
              <p>{value.des}</p>
              <br />
              <p>{value.tec}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
