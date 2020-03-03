import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Cards from './components/layouts/Cards';
import Wrapper from '~/components/layouts/Wrapper';
import { dark, light } from './styles/themes';
import ThemeContext from './styles/themes/context';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  const [myTheme, setThemes] = useState(light);

  function toggleTheme() {
    setThemes(myTheme === dark ? light : dark);
  }
  return (
  
    <ThemeContext.Provider value={myTheme}>
      <ThemeContext.Consumer>
        {theme => (
          <ThemeProvider theme={theme}>
            <Wrapper toggleTheme={toggleTheme} />
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}

export default App;
