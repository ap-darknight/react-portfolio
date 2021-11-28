import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import MainLogo from '../assets/Images/logo_work_1.png';



const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          <img style={{maxHeight: "70px"}} src={MainLogo} />
        </Logo>
    )
}

export default LogoComponent
