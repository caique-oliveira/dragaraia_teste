import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import  GlobalStyles  from './components/global';
import { theme } from './theme';
import  Burger  from './components/Burger';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Cards from './components/layouts/Cards';
import Wrapper from '~/components/layouts/Wrapper';
import { dark, light } from './styles/themes';
import ThemeContext from './styles/themes/context';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  
  const [myTheme, setThemes] = useState(light);

  function toggleTheme() {
    setThemes(myTheme === dark ? light : dark);
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      
        <GlobalStyles />
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
          <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
          <small>Icon made by Freepik from www.flaticon.com</small>
        </div>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
    </ThemeProvider>
  
    <ThemeContext.Provider value={myTheme}>
      <ThemeContext.Consumer>
        {theme => (
          <ThemeProvider theme={theme}>
            <Wrapper toggleTheme={toggleTheme} />
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
    </>
  );
  
}

export default App;
