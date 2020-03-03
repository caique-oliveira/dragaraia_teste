import React, { Component } from  'react';
import styled from 'styled-components';
import Navlinks from './NavLinks';

const MyMobileNavbar = styled.nav`

    width: 50vh;
    background: ${ props => props.theme.primary };
    align-self: flex-end;
    transition: transform 1s;
    margin-botton: 15px;
    transform: transLateX( ${props => props.displayMobileNavbar ? ("0") : ("calc:100% + 15px)") });
    box-shadow: -10px 18px 5px ${ props => props.theme.accent };
    .navbar-links {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: center;
        widht: 35vw;
        list-style:none;
        height : 60vh;
    }
    .link{
        color: white;
        font-size: 2.5vh;
        text-decoration: none;
    }
`

const MobileNavbar = props =>{
        return(
            <MyMobileNavbar displayMobileNavbar = { props.displayMobileNavbar }>
                <Navlinks />   
            </MyMobileNavbar>    
        );
}

export default MobileNavbar;