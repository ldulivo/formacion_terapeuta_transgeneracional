import CollageImg from "../../img/pablo_sarabia_collage.png"

export default function Collage() {
  return (
    <div className='Collage'>
        <h2>Formación Terapeuta transgeneracional</h2>
        <p className="Collage--efect">¿Estás listo para sanar</p>
        <p className="Collage--efect">tu propia Historia?</p>
        <div className="Collage--container">
          <img src={CollageImg} alt="Pablo Saravia" />
        </div>
        <p>
          <b>Te Compartiré todas las herramientas y
          metodologías que utilizo con mis
          pacientes,</b> para que te formes como
          terapeuta transgeneracional y/o sanes tu
          propia historia.
        </p>
    </div>
  )
}
