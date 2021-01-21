import axios from 'axios';

export const getSecretWord = async (setSecretWord) => {
  const res = await axios.get(
    'https://random-word-api.herokuapp.com/word?number=1'
  );
  setSecretWord(res.data[0]);
};

export default {
  getSecretWord,
};
