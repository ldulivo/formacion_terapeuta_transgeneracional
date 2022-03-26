import React from 'react'
import Iframe from '../iframe/Iframe'

export default function Header() {
  return (
    <header className='header'>
        <div className="header--title">
            <h1>Formación Terapeuta Transgeneracional</h1>
            <h2>Pablo Saravia</h2>
        </div>
        <div className='header--animation'>
            <header>
                <p>
                    <span>Abierta la inscripcion a la única</span>
                </p>
                <p>
                    <span>formacion del 2022</span>
                </p>
            </header>
            <footer>
                <Iframe src={"https://www.youtube.com/embed/aMfM43ZC52w"} />
            </footer>
        </div>
    </header>
  )
}
