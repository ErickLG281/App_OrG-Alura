import "./CampoTexto.css";

const CampoTexto = (props) => {
 // console.log("Datos:", props);
  const placeholderModificador = `${props.placeholder}...`;

  
    //Destructuracion 
    const { type = "text" } = props

  const manejarCambio = (e) => {
    //console.log("Cambio", e.target.value);
    props.actualizarValor(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificador}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}

      />
    </div>
  );
};

export default CampoTexto;
