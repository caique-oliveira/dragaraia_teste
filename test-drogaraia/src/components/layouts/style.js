import styled from 'styled-components'

export const NavbarSection = styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #ededed;
    position: relative;
    border-bottom: 1px solid #ededed;
`

export const Logo = styled.div`
    width: 10%;
    float: left;
    text-indent: -9999999px;
    display: inline-block;
    height: 100%;
    width: 145px;
    background-image: url(./components/layouts/rd.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
    `

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
`
export const UlList = styled.ul`
    width: 30%;
    float: right;
    list-style: none;
    white-space: nowrap;
    padding: 0;
`
export const ListItem = styled.li`
    display: inline-block;
`

export const Anchor = styled.a` 
    display: block;
    color: #007f56!important;
    text-decoration: none;
    padding: 10px 15px;
        
        &:hover{
            color: #868686!important;
        }
    `