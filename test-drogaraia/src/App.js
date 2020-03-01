import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import Navbar from './components/layouts/Navbar';
import styled from 'styled-components';
import Footer from './components/layouts/Footer';
import Cards from './components/layouts/Cards';
import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor} from './components/layouts/style.js'
import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';
import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';


class App extends Component {
  state ={
    themes: themes.dark,
  };

  toggleTheme = () => {
    this.setState({ theme: this.state.theme == themes.dark ? themes.light: themes.dark });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Cards />
        <div>
          <ThemeContext.Provider value={this.state}>
          <ThemeSwitcher toggleTheme={this.toggleTheme} />
          <ThemeContext.consumer>
            {theme => <ThemeProvider theme={theme}>
                        <TodoList />
                      </ThemeProvider> 
            }
          </ThemeContext.consumer>
          </ThemeContext.Provider>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
//export default App;