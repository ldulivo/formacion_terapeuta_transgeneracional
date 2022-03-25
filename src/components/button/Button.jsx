import Whatsapp from '../../svg/Whatsapp'
//href="https://wa.me/5491139102975?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio" 

export default function Button({ className, children }) {
  const msg = 'Hola Pablo! Estoy interesado en tu curso';
  const number = '5491139102975'
  return (
    <a 
      href={`https://wa.me/${number}?text=${msg}`} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button className={`button ${className}`}>
          <Whatsapp /> { children }
      </button>
    </a>
  )
}
