import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import logo from './rd.png';
import Navbar from './components/layouts/Navbar';
import styled from 'styled-components'
import Footer from './components/layouts/Footer';
import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor} from './components/layouts/style.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        
        <Footer />
      </div>
    );
  }
}
export default App;
//export default App;