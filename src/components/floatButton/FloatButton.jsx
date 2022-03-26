import Whatsapp from '../../svg/Whatsapp'

export default function FloatButton() {
    const msg = '¡Hola Pablo! Estoy interesado en la Formación Transgeneracional';
    const number = '5491139102975';

  return (
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
  )
}
