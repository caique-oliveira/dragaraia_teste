import React, { Component } from  'react';
import styled from 'styled components';
import NavLinks from './NavLinks';
import MobileNavIcon from '../../imagens/rd.png';

const MyDesktopNavbar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    background: ${ props => props.theme.primary };
    color: white;

    height: 15vh;

    box-shadow: ${ props => props.theme.accent };
    .logo {
        font-size: 7vh;
        font-weught: bold;
        text-shadow: 3px 3px 3px ${ props => props.theme.accent };
    }
    .navbar-links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
        widht: 35vw;
        list-style:none;

        @media screen and (max-width: 768px){
            display: none;
        }
    }
    .link{
        color: white;
        font-size: 2.5vh;
        text-decoration: none;
    }

`
const MyMobileNavButton = styled.button`
    background: transparent;
    height: 6vh;
    width: 6vh;
    border:none;
    display:none;

    @media screen and (max-width: 768px){
        display: block;
    }
`

const DesktopNavbar = props => {
        return(
            <MyDesktopNavbar>
                <div className="logo">logo</div>
               <NavLinks />
               <MyMobileNavButton
                onClick = { props.toggleMobileNavbar }
               >

                   <img src={MobileNavIcon} alt="icone-Mobile" />
               </MyMobileNavButton>*
            </MyDesktopNavbar>    
        )
}

export default DesktopNavbar;