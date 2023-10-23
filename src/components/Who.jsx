import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`;

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex: 1;

`;

const Title = styled.h1`
font-size: 74px;
`;

const Right = styled.div`
flex: 1;
display: flex;
flex-direction:column;
justify-content:center;
gap:20px;
`;

const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Line = styled.img`
height: 5px;
`;

const Subtitle = styled.h2`
color: #DA0C81;
`;

const Desc = styled.p`
font-size: 24px;
color: lightgray;
`;

const Button = styled.button`
background-color: #DA0C81;
color:white;
font-weight: 500;
width: 120px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`;



const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    {/* 3d model */}
                </Left>
                <Right>
                    <Title>The way to find out if the code is alive or dead.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>is to open the box.</Subtitle>
                    </WhatWeDo>
                    <Desc>Check out my github profile where you can find some of my work.</Desc>
                    <Button>Let's check it out</Button>
                </Right>
            </Container>
        </Section>
    );
};

export default Who