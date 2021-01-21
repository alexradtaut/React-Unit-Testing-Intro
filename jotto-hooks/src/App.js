import React from 'react';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import hookActions from './actions/hookActions';
import Input from './components/Input';

function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    default:
      throw new Error('Invalid action type');
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });
  const setSecretWord = (secretWord) =>
    dispatch({ type: 'setSecretWord', payload: secretWord });

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
      <Congrats success={true} />
      <Input secretWord={state.secretWord} />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
