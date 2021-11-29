import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
            <div>
                <h3>About [Ashutosh], </h3>
                <br/><br/>
                I'm a <span style={{color: "green"}}>[full-stack developer]-slash-[Competitive Coder]</span> located in India. I love to learn through challenges.
                <br /> <br/>
                I'm an <span style={{color: "green"}}>undergraduate[Computer Science and Engineering(2018 - 2022)] at Madan Mohan Malaviya University of Technology</span> and a wanna be Blogger. 
                I love to write codes and read books.
                <br/> <br/>
                I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
                <br/><hr></hr>
                <span style={{color: "greenyellow"}}>I am available for interns, freelance and employment.</span>
            </div>
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
