import React, { useEffect } from "react";
import { useState } from "react"
const Habilidades = () => {
  const [listHablidades] = useState([
{
nombre:"HTML", 
icon: "icon-html.png"
},
{
nombre:"CSS",
icon: "icon-css.png"
},
{
  nombre:"JavaScript",
  icon:"icon-js.png"
},
{
  nombre: "React Js",
  icon: "icon-react.png"
},
{
  nombre: "GIT",
  icon: "icon-git.png"
},
{
  nombre: "GitHub",
  icon: "icon-github.png"
},
{
  nombre: "Sass",
  icon: "icon-sass.png"
},
{
  nombre: "Figma",
  icon: "icon-figma.png"
},
{
  nombre: "npm",
  icon: "icon-npm.png"
},
{
  nombre: "Vite",
  icon: "icon-vite.png"
},
{
  nombre: "Tailwind CSS",
  icon: "icon-tailwind.png",
  des:"Aprendiendo"
},
{
  nombre: "TypeScript",
  icon: "icon-typescript.png",
  des:"Aprendiendo"
},
{
  nombre: "Redux",
  icon: "icon-redux.png",
  des:"Aprendiendo"
}
  ]);

  return (

    <section id="habilidades" className="skills" >
      <div className="titulo-principal">
      <div className="title" >
        Habilidades y Herramientas
      </div>
      <div className="des" >
      A continuación, presento las habilidades que he desarrollado durante mi período de estudios.
      </div>
      </div>
      <div className="list" > 
        {
          listHablidades.map((value,key)=>(
            <div key={key} className="item">
              <div className="ability">
              <img src={value.icon} alt={value.nombre} style={{margin:"auto",width: "60px", height: "60px"}} />
              <h3 >{value.nombre}</h3>
              <p>{value.des}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Habilidades;