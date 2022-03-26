import { useState } from 'react'
import Whatsapp from '../../svg/Whatsapp'

export default function FloatButton() {
    const msg = '¡Hola Pablo! Estoy interesado en la Formación Transgeneracional';
    const number = '5491139102975';

    const [scrollY, setScrollY] = useState(window.scrollY);

    window.onscroll = () => {
      setScrollY( window.scrollY )
    }


  return (

    <>
      {
        ( scrollY > 300 )
        ? 
          <a 
          href={`https://wa.me/${number}?text=${msg}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className='FloatButton'
        >
          <button className='FloatButton--btn'>
              <Whatsapp />
          </button>
        </a>
        : null
      }
      
    </>
      
  )
}
