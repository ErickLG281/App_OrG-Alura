import "./CampoTexto.css";

const CampoTexto = (props) => {
    console.log("Datos:",props);
    return <div className="campo-texto">
        <label >{props.titulo}</label>
        <input placeholder="Ingresar Nombre" />
        </div>
}



export default CampoTexto;