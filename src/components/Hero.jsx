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
`;

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex:2;
display:flex;
flex-direcction:column;
justify-content:center;
gap:20px;
`;
const Title = styled.h1`
`;
const WhatWeDo = styled.div`
`;
const Line = styled.img`
`;
const Subtitle = styled.h2`
`;
const Desc = styled.p`
`;
const Button = styled.button`
`;


const Right = styled.div`
flex:3;
`;
const Img = styled.img`
`;


const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
            <Left>
                <Title>Hi, I'm an android developer.</Title>
                <WhatWeDo>
                    <Line src="./img/line.png"/>
                    <Subtitle>What I do</Subtitle>
                </WhatWeDo>
                <Desc>I love creating and solve challenges in the world of mobile applications.</Desc>
                <Button>Learn more</Button>
            </Left>
            <Right>
                {/* 3d model */}
                <Img src="./img/moon.png"/>
            </Right>
        </Container>
    </Section>
  )
}

export default Hero