import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Cards from './components/layouts/Cards';
import Wrapper from '~/components/layouts/Wrapper';
import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';
import { dark, light } from './styles/themes';
import ThemeContext from './styles/themes/context';

function App() {
  const [myTheme, setThemes] = useState(dark);

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
