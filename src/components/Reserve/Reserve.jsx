import React from 'react'
import './Reserve.css'

const Reserve = () => {
    const saveInfo = () => {

    }
  return (
    <div className='form'>
        Formulario reserva<br/>
        <div className='name'>
            Nombre:<br/>
            <input type="text" placeholder="Nombre"/><br/>
        </div>
        <div className='email'>
            Correo:<br/>
            <input type="text" placeholder="Correo electrónico"/><br/>
        </div>
        <div className='date'>
            Día de la reserva<br/>
            <input type="date"/><br/>
        </div>
        <button onClick={saveInfo}>Enviar</button>

    </div>
  )
}

export default Reserve