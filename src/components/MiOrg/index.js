import "./Miorg.css"

const Miorg = (props) => {


//ESTADO - HOOKS 



    return <section className="orgSection">
        <h3 className="title" >Mi Organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />

    </section>

}

export default Miorg;