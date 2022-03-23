import CollageImg from "../../img/pablo_sarabia_collage.png"

export default function Collage() {
  return (
    <div className='Collage'>
        <h2>Formación Terapeuta transgeneracional</h2>
        <p>¿Estás listo para sanar</p>
        <p>tu propia Historia?</p>
        <div className="Collage--container">
          <img src={CollageImg} alt="Pablo Saravia" />
        </div>
        <p>
          Te Compartiré todas las herramientas y
          metodologías que utilizo con mis
          pacientes, para que te formes como
          terapeuta transgeneracional y/o sanes tu
          propia historia.
        </p>
    </div>
  )
}
