import React, { Component } from  'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import styled from 'styled-components';

const MyNavbar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justfy-content: flex-start;
    overflow-x: hidden;
`

class NavbarPro extends Component{

    state = {
        displayMobileNavbar: true
    }
    toogleMobileNavbar = () => {
        this.setState( prevState =>{
            return { displayMobileNavbar :!prevState.displayMobileNavbar}
        })
    }
    render(){
        return(
            <MyNavbar>
                <DesktopNavbar toogleMobileNavbar = { this.displayMobileNavbar }/>
                <MobileNavbar displayMobileNavbar = { this.state.displayMobileNavbar }/>
            </MyNavbar>    
        )
    }
}

export default NavbarPro;