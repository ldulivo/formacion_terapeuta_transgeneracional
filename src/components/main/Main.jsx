import React from 'react'
import Button from '../button/Button'
import FloatButton from '../floatButton/FloatButton'
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
import SectionDivider from '../sectiondivider/SectionDivider'
import Testimonials from '../testimonials/Testimonials'

export default function Main() {
  return (
    <main className='main'>
        <FloatButton />

        <Section backGround={'border_bottom'}>
            <Intro />
            <SectionDivider className="SectionDivider-b"/>
        </Section>

        <Section backGround={'white'}>
            <Aprenderas />
            <Button>Reservá tu lugar</Button>
        </Section>

        <Section backGround={'white'}>
          <div className="content">
              <Collage />
          </div>
        </Section>

        <Section backGround={'border_top'}>
            <SectionDivider className="SectionDivider--grey"/>
            <div className="content">
              <QueEs />
              <DirigidoA />
              <PorQueEsDiferente />
              <NoPuedoAsistir />
              <NoEstoyConforme />
              <IncluyeCertificado />
              <CuandoComienza />
              <Button className="m-tb15">¡Si, quiero asegurar mi lugar!</Button>
            </div>
        </Section>
        
        <Section backGround={'blue text_white'}>
            <SectionDivider />
            <QueVeremos />
        </Section>
            <Button className="m-tb15 mb100">¡Quiero asegurar mi lugar!</Button>

        <Section backGround={'border_top'}>
          <div className="content content2">
            <h2>Lo que opinan nuestros estudiantes:</h2>
            <Testimonials />
          </div>
        </Section>
    </main>
  )
}
