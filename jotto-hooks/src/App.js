import React from 'react';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import hookActions from './actions/hookActions';
import Input from './components/Input';
import languageContext from './contexts/languageContext';

import LanguagePicker from './components/LanguagePicker';

function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    case 'setLanguage':
      return { ...state, language: action.payload };
    default:
      throw new Error('Invalid action type');
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
    language: 'en',
  });
  const setSecretWord = (secretWord) =>
    dispatch({ type: 'setSecretWord', payload: secretWord });

  const setLanguage = (language) =>
    dispatch({ type: 'setLanguage', payload: language });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);
  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p> Loading secret word </p>
      </div>
    );
  }
  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Congrats success={true} />
        <Input secretWord={state.secretWord} />
        <GuessedWords
          guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
        />
      </languageContext.Provider>
    </div>
  );
}

export default App;
