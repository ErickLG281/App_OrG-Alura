import "./ListaOpciones.css"

const ListaOpciones = () =>{

  //Metodo Map -> aareglo.map ( () => {} )
    const equipos=[
      "Programacion",
      "Frontend",
      "Data Sciencie",
      "Devops",
      "Ux y Diseño",
      "Movil",
      "Innovacion y Gestión"	
    ]
  
    return <div className="lista-opciones">
       <label>Equipos</label>
       <select>
         { equipos.map( (equipo, index) =>  <option key={index} >{equipo}</option>)}
       </select>
        </div>
}

export default ListaOpciones;