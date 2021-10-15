import React, {Fragment} from 'react'

const Formulario = () => {

    const[actividad, actualizarActividad]= useState({
        mascota:"Qiqi",
        dueño:"",
        fecha:"",
        hora:"",
        sintomas:"",
    });

    const actualizarState = e => {
        actualizarActividad({
            [e.target.name]: e.target.value
        })
    }

    return ( <Fragment>
        <h2>Crear lista</h2>
        <form>
            <label>Nombra mascota</label>
            <input 
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
            />

            <label>Nombre Dueño</label>
            <input 
                type="text"
                name="dueño"
                className="u-full-width"
                placeholder="Nombre "
                onChange={actualizarState}
            />
            
            <label>Fecha</label>
            <input 
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
            />

            <label>Hora</label>
            <input 
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
            />

            <label>Sintomas</label>
            <textarea 
                className="u-full-width"
                name="sintomas"
            ></textarea>

            <button
               type="submit"
               className="u-full-width button-primary"
            >Agregar Cita</button>
        </form>
    </Fragment> );
}
 
export default Formulario;