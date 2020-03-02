import React from 'react';
import PropTypes from 'prop-types';

function ThemeSwitcher({ toggleTheme }) {
  return (
    <button type="button" onClick={toggleTheme}>
      Alterar tema!
    </button>
  );
}

ThemeSwitcher.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
