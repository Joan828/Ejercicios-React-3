import React from 'react'
import './Reserve.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Reserve = () => {
    const initialValues = {
        name: "",
        email: "",
        date: ""
    }
    const [data, setData] = useState(initialValues)

    const navigate = useNavigate()

    const saveInfo = (e) => {
        e.preventDefault()
        setData(initialValues)
        navigate("/")
    }
    const handleOnChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        })
      }

  return (
    <div className='form'>
        Formulario reserva<br/>
        <div className='name'>
            Nombre:<br/>
            <input type="text" name="name" value={data.name} placeholder="Nombre" onChange={handleOnChange}/><br/>
        </div>
        <div className='email'>
            Correo:<br/>
            <input type="text" name="email" value={data.email} placeholder="Correo electrónico" onChange={handleOnChange}/><br/>
        </div>
        <div className='date'>
            Día de la reserva<br/>
            <input type="date" name="date" value={data.date} onChange={handleOnChange}/><br/>
        </div>
        <button onClick={saveInfo}>Enviar</button>

    </div>
  )
}

export default Reserve