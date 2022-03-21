import React from 'react'
import ArrowDown from '../../svg/ArrowDown'

export default function Header() {
  return (
    <header className='header'>
        <h1>Formación Terapeuta Transgeneracional</h1>
        <h2>Pablo Saravia</h2>
        <div className='header--animation'>
            <header>
                <p>
                    <span>Abierta la inscripcion</span>
                </p>
                <p>
                    <span>a la única formacion</span>
                </p>
                <p>
                    <span>del 2022</span>
                </p>
            </header>
            <main>
                <ArrowDown />
            </main>
        </div>
    </header>
  )
}
