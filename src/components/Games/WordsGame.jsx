import { useState } from 'react';

const options = {
    aroma: "Pleasing smell",
    pepper: "Salt's partner",
    halt: "Put a stop to",
    jump: "Rise suddenly",
    shuffle: "Mix cards up",
    combine: "Add; Mix",
    chaos: "Total disorder",
    labyrinth: "Maze",
    disturb: "Interrupt; upset",
    shift: "Move; Period of work",
    machine: "Device or appliance",
    glow: "Soft light",
    echo: "Sound reflection",
    whisper: "Speak softly",
    giggle: "Light laugh",
    breeze: "Gentle wind",
    puzzle: "Brain teaser",
    gather: "Collect together",
    whirl:"“Spin around",
    glimpse: "Quick look",
    tangle: "Twist together",
    sparkle: "Shine brightly",
    flutter: "Move lightly and quickly",
    crumble: "Break into small pieces",
    murmur: "Soft, indistinct sound",
    glide: "Move smoothly",
    drizzle: "Light rain",
    sizzle: "Sound of frying",
};

function WordsGame() {
  const words = Object.keys(options);
  const [randomWord, setRandomWord] = useState('');
  const [randomHint, setRandomHint] = useState('');
  const [winCount, setWinCount] = useState(0);
  const [lossCount, setLossCount] = useState(5);
  const [message, setMessage] = useState('');
  const [letters, setLetters] = useState([]);

  const startWordsGame = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setRandomWord(word);
    setRandomHint(options[word]);
    setWinCount(0);
    setLossCount(5);
    setMessage('');
    setLetters(word.toUpperCase().split('').map(() => '_'));
  };

  const handleLetterClick = (letter) => {
    const upperWord = randomWord.toUpperCase();
    const newLetters = [...letters];
    let win = winCount;

    if (upperWord.includes(letter)) {
      upperWord.split('').forEach((char, index) => {
        if (char === letter) {
          newLetters[index] = letter;
          win += 1;
        }
      });

      setLetters(newLetters);
      setWinCount(win);
      setMessage('Correct Letter');
    } else {
      setLossCount(lossCount - 1);
      setMessage('Incorrect Letter');
    }

    if (win === randomWord.length) {
      setMessage('You Won!');
    } else if (lossCount === 1) {
      setMessage(`WordsGame Over. The word was ${randomWord}`);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-4">Word Quiz WordsGame</h1>
      <p className="mb-4 text-lg">Hint: {randomHint}</p>
      <div className="flex justify-center mb-4">
        {letters.map((letter, index) => (
          <span key={index} className="mx-1 text-2xl">
            {letter}
          </span>
        ))}
      </div>
      <p className="mb-4 text-red-500">{message}</p>
      <div className="flex justify-center mb-4">
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((char) => (
          <button
            key={char}
            className="m-1 bg-blue-500 text-white rounded px-2 py-1"
            onClick={() => handleLetterClick(char)}
            disabled={letters.includes(char) || message.includes('WordsGame Over')}
          >
            {char}
          </button>
        ))}
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={startWordsGame}
      >
        {message.includes('Won') || message.includes('Over') ? 'Restart' : 'Start'}
      </button>
    </div>
  );
}

export default WordsGame;
