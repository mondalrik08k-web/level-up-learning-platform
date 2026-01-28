import { useState, useEffect, useRef } from "react";

// Sample words for the typing game
const words = ["hello", "world", "react", "typing", "game", "javascript"];

function TypingGame() {
  // Define state variables
  const [currentWord, setCurrentWord] = useState("");
  const [typedWord, setTypedWord] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [wrongWords, setWrongWords] = useState([]);

  const inputRef = useRef(null);

  // Start the game by setting a new word
  useEffect(() => {
    setNewWord();
  }, []);

  // Focus the input element after it has been rendered
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentWord]);

  // Check the typed word against the current word
  useEffect(() => {
    if (typedWord === currentWord && typedWord !== "") {
      // Correct word typed
      setScore((prevScore) => prevScore + 1);
      setTypedWord("");
      setNewWord(true);
    } else if (typedWord.length >= currentWord.length && typedWord !== "") {
      // Incorrect word typed
      setWrongWords((prev) => [...prev, currentWord]);
      setTypedWord("");
      setNewWord(true);
    }
  }, [typedWord, currentWord]);

  // Set a new word and update total questions if it's due to user input
  const setNewWord = (incrementQuestions = false) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex]);
    if (incrementQuestions) {
      setTotalQuestions((prevTotal) => prevTotal + 1);
    }
    setTime(0); // Reset the timer for each word
  };

  // Timer for counting time taken
  useEffect(() => {
    if (!isGameOver) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isGameOver]);

  // Handle input changes
  const handleInputChange = (e) => {
    setTypedWord(e.target.value);
  };

  // End the game
  const handleGameOver = () => {
    setIsGameOver(true);
  };

  // Restart the game
  const handleRestart = () => {
    setScore(0);
    setTotalQuestions(0);
    setWrongWords([]);
    setIsGameOver(false);
    setTypedWord("");
    setNewWord();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-teal-600 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">Typing Game</h1>

      {!isGameOver ? (
        <>
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-2xl">{currentWord}</h2>
          </div>

          <input
            ref={inputRef}
            type="text"
            value={typedWord}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full max-w-sm mb-4"
            placeholder="Type the word..."
          />

          <div className="mb-4">
            <p className="text-lg text-white">Score: {score}</p>
            <p className="text-lg text-white">Time: {time} seconds</p>
            <p className="text-lg text-white">Total Questions: {totalQuestions}</p>
          </div>

          <button
            onClick={handleGameOver}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
          >
            End Game
          </button>
        </>
      ) : (
        <>
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-2xl">Game Over!</h2>
            <p className="text-lg">Your Score: {score}</p>
            <p className="text-lg">Total Questions: {totalQuestions}</p>
            <p className="text-lg">
              Wrong Words: {wrongWords.length > 0 ? wrongWords.join(", ") : "None"}
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Restart Game
          </button>
        </>
      )}
    </div>
  );
}

export default TypingGame;
