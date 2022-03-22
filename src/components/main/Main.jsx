import React from 'react'
import Aprenderas from '../pages/Aprenderas'
import Intro from '../pages/Intro'
import QueVeremos from '../pages/QueVeremos'
import Section from '../section/Section'

export default function Main() {
  return (
    <main className='main'>
        <Section backGround={'border_bottom'}>
            <Intro />
        </Section>
        <Section backGround={'white'}>
            <Aprenderas />
        </Section>
        <Section backGround={'blue text_white'}>
            <QueVeremos />
        </Section>
    </main>
  )
}
