import React from 'react'
import Check from '../../svg/Check'

export default function Main() {
  return (
    <main className='main'>
        <section>
            <p>
            El objetivo de la terapia es liberar
            la memoria del clan familiar,
            todos esos programas, creencias,
            patrones y conductas limitantes
            que hemos heredado y que nos
            impiden hoy en día conseguir los
            objetivos que deseamos.
            </p>
        </section>
        <section>
            <h2>En este programa aprenderás a:</h2>
            <ul>
                <li><Check /> programa 1</li>
                <li><Check />programa 2</li>
                <li><Check />programa 3</li>
                <li><Check />programa 4</li>
                <li><Check />programa 5</li>
                <li><Check />programa 6</li>
                <li><Check />programa 7</li>
                <li><Check />programa 8</li>
                <li><Check />programa 9</li>
                <li><Check />programa 10</li>
            </ul>
            <button className="button">Reservá tu lugar</button>
        </section>
    </main>
  )
}
