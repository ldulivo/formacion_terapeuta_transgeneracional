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
                    <span>Abierta la inscripcion a la única</span>
                </p>
                <p>
                    <span>formacion del 2022</span>
                </p>
            </header>
{/* 
            <main>
                <ArrowDown />
            </main>
                 */}
            <footer>
                <iframe 
                    src="https://www.youtube.com/embed/aMfM43ZC52w"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    title='Formación transgeneracional'
                    frameBorder={0}
                >
                </iframe>
            </footer>
        </div>
    </header>
  )
}