import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
`

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
`

const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container>Hero</Container>
    </Section>
  )
}

export default Hero