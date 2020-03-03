import React, { Component } from  'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


class MobileNavbar extends Component{

    render(){
        return(
            <ul className="nav-links">
            <li>
                <Link to="/" className="link">HOme</Link>
            </li>
            <li>
                <Link to="/" className="link">teste</Link>
            </li>
            <li>
                <Link to="/" className="link">Contato</Link>
            </li>
            <li>
                <Link to="/" className="link">teste</Link>
            </li>

        </ul> 
        );
    }
}

export default MobileNavbar;