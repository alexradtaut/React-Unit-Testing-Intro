import React from 'react';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import hookActions from './actions/hookActions';

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
  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
