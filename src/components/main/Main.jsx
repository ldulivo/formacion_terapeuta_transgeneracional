import React from 'react'
import Button from '../button/Button'
import Aprenderas from '../pages/Aprenderas'
import Collage from '../pages/Collage'
import CuandoComienza from '../pages/CuandoComienza'
import DirigidoA from '../pages/DirigidoA'
import IncluyeCertificado from '../pages/IncluyeCertificado'
import Intro from '../pages/Intro'
import NoEstoyConforme from '../pages/NoEstoyConforme'
import NoPuedoAsistir from '../pages/NoPuedoAsistir'
import PorQueEsDiferente from '../pages/PorQueEsDiferente'
import QueEs from '../pages/QueEs'
import QueVeremos from '../pages/QueVeremos'
import Section from '../section/Section'
import Testimonials from '../testimonials/Testimonials'

export default function Main() {
  return (
    <main className='main'>
        <Section backGround={'border_bottom'}>
            <Intro />
        </Section>

        <Section backGround={'white'}>
            <Aprenderas />
            <Button>Reservá tu lugar</Button>
        </Section>

        <Section backGround={'white'}>
            <Collage />
        </Section>

        <Section backGround={'border_top'}>
            <QueEs />
            <DirigidoA />
            <PorQueEsDiferente />
            <NoPuedoAsistir />
            <NoEstoyConforme />
            <IncluyeCertificado />
            <CuandoComienza />
            <Button className="m-tb15">¡Si, quiero asegurar mi lugar!</Button>
        </Section>
        
        <Section backGround={'blue text_white'}>
            <QueVeremos />
        </Section>

        <Section>
          <Testimonials />
        </Section>
    </main>
  )
}
