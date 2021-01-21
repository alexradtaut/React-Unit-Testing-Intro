import React from 'react';
import PropTypes from 'prop-types';

function LanguagePicker({ setLanguage }) {
  return <div data-test="component-language-picker"></div>;
}

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};

export default LanguagePicker;
