import React from 'react';
import styled from 'styled-components';
import { Logo, UlList, ListItem, Anchor } from './style.js';
import logo from '../../imagens/rd.png';



const NavbarSection = styled.div`
  padding: 20px 0;
    overflow: hidden;
    background: #ededed;
    position: relative;
    border-bottom: 0.5px solid #868686;
`

const navbar = () => {
    return(
        <NavbarSection>
            
                <Logo>
                    <img className="myLogo" src={logo} />
                </Logo>
                    <UlList>
                        <ListItem>
                            <Anchor>HTML5</Anchor>
                        </ListItem>
                        <ListItem>
                            <Anchor>CSS3</Anchor>
                        </ListItem>
                        <ListItem>
                            <Anchor>Javascript</Anchor>
                        </ListItem>
                        <ListItem>
                            <Anchor>React</Anchor>
                        </ListItem>
                        <ListItem>
                            <Anchor>Redux</Anchor>
                        </ListItem>
                    </UlList>
        </NavbarSection>    
    )
  }
  export default navbar;