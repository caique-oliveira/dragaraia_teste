import React from 'react';
import styled from 'styled-components';
import { Logo, LogoText, UlList, ListItem, Anchor } from './style.js';

const NavbarSection = styled.div`
  padding: 20px 0;
    overflow: hidden;
    background: #ededed;
    position: relative;
    border-bottom: 1px solid #ededed;
`
const navbar = () => {
    return(
        <NavbarSection>
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
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