import React from 'react'
import Whatsapp from '../../svg/Whatsapp'

export default function Button({ className, children }) {
  return (
    <a 
      href="https://wa.me/54110000000?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button className={`button ${className}`}>
          <Whatsapp /> { children }
      </button>
    </a>
  )
}
