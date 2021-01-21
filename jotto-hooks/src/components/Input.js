import React from 'react';
import PropTypes from 'prop-types';
import languageContext from '../contexts/languageContext';
import stringsModule from '../helpers/strings';

function Input({ secretWord }) {
  const language = React.useContext(languageContext);
  const [currentGuess, setCurrentGuess] = React.useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    setCurrentGuess('');
  };
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder={stringsModule.getStringByLanguage(
            language,
            'guessInputPlaceholder'
          )}
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={(e) => onSubmit(e)}
        >
          {stringsModule.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
