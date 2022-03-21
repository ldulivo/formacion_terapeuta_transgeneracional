import React from 'react'
import ArrowRight from '../../svg/ArrowRight'
import Check from '../../svg/Check'
import Card from '../card/Card'

export default function QueVeremos() {
  return (
    <>
    <h2>¿Qué veremos?</h2>
    <div className="card-container">
        <Card>
            <h3>Módulo 1</h3>
            <ul>
                <li><Check background={'transparent'} /><p>¿Qué es para ti lo transgeneracional?</p></li>
                <li><Check background={'transparent'} /><p>Tres espacios tiempos de trabajo.</p></li>
                <li><Check background={'transparent'} /><p>¿Porque es importante trabajar sobre lo transgeneracional en la terapia?</p></li>
                <li><Check background={'transparent'} /><p>Protocolo.</p></li>
                <li><Check background={'transparent'} /><p>Principios básicos del transgeneracional.</p></li>
                <li><Check background={'transparent'} /><p>Aspectos a tener en cuenta que constituyen una memoria transgeneracional.</p></li>
            </ul>
        </Card>

        <Card>
            <h3>Módulo 2</h3>
            <ul>
                <li><Check background={'transparent'} /><p>Con quién estamos vinculados en el árbol.</p></li>
                <li><Check background={'transparent'} /><p>Rango de hermandad.</p></li>
                <li><Check background={'transparent'} /><p>Nuestros nombres.</p></li>
                <li><Check background={'transparent'} /><p>Fechas de nacimiento y/o Concepción.</p></li>
                <li><Check background={'transparent'} /><p>Qué es sanar para el transgeneracional.</p></li>
                <li><Check background={'transparent'} /><p>Los conflictos más importantes dentro del árbol.</p></li>
            </ul>
        </Card>
        
        <Card>
            <h3>Módulo 3</h3>
            <ul>
                <li><Check background={'transparent'} /><p>Cómo impactan los crímenes dentro de nuestro árbol transgeneracional.</p></li>
                <li><Check background={'transparent'} /><p>Consecuencias en la descendencia.</p></li>
                <li><Check background={'transparent'} /><p>Protocolo.</p></li>
                <li><Check background={'transparent'} /><p>Terapia simbólica.</p></li>
            </ul>
        </Card>
        
        <Card>
            <h3>Módulo 4</h3>
            <ul>
                <li><Check background={'transparent'} /><p>Los duelos no resueltos a nivel transgeneracional.</p></li>
                <li><Check background={'transparent'} /><p>A qué llamamos una muerte dramática.</p></li>
                <li><Check background={'transparent'} /><p>Impacto sobre la descendencia.</p></li>
                <li><Check background={'transparent'} /><p>Lista de resentires, asociados a un duelo bloqueado.</p></li>
                <li><Check background={'transparent'} /><p>Protocolo.</p></li>
            </ul>
        </Card>
        
        <Card>
            <h3>Módulo 5</h3>
            <ul>
                <li><Check background={'transparent'} /><p>Aclaraciones terapéuticas.</p></li>
                <li><Check background={'transparent'} /><p>Protocolo.</p></li>
                <li><Check background={'transparent'} /><p>Estado de trance.</p></li>
                <li><Check background={'transparent'} /><p>Cómo estructurar la terapia.</p></li>
                <li><Check background={'transparent'} /><p>El paso a paso en la terapia.</p></li>
            </ul>
        </Card>
    </div>
    

    </>
  )
}
