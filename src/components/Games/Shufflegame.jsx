import { useState, useEffect } from 'react';

const ShuffleGame = () => {
  const [boxes, setBoxes] = useState([false, true, false]);
  const [shuffled, setShuffled] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [result, setResult] = useState(null);
  const [shuffling, setShuffling] = useState(false);
  const [ballPosition, setBallPosition] = useState(1); // 0, 1, or 2 to represent the position of the ball
  const [ballVisible, setBallVisible] = useState(true);

  useEffect(() => {
    let shuffleInterval;
    if (shuffling) {
      shuffleInterval = setInterval(() => {
        // Move the ball to a new position
        setBallPosition((prevPosition) => {
          let newPosition;
          do {
            newPosition = Math.floor(Math.random() * 3);
          } while (newPosition === prevPosition);
          return newPosition;
        });
      }, 100); // Faster shuffle speed (100ms)
    } else if (!shuffling && shuffled) {
      clearInterval(shuffleInterval);
    }
    return () => clearInterval(shuffleInterval);
  }, [shuffling, shuffled]);

  const startShuffle = () => {
    setShuffled(true);
    setShuffling(true);
    setSelectedBox(null);
    setResult(null);
    setBallVisible(true);
  };

  const stopShuffle = () => {
    setShuffling(false);
    setBallVisible(false); // Hide the ball when shuffling stops
    // Update boxes array to reflect the final position of the ball
    setBoxes([false, false, false].map((_, i) => i === ballPosition));
  };

  const handleBoxClick = (index) => {
    if (shuffled && !shuffling) {
      setSelectedBox(index);
      setResult(boxes[index] ? 'You Won!' : 'You Lost!');
      setBallVisible(true); // Reveal the ball after the user's guess
    }
  };

  const restartGame = () => {
    setBoxes([false, true, false]);
    setShuffled(false);
    setShuffling(false);
    setSelectedBox(null);
    setResult(null);
    setBallPosition(1); // Reset ball position to the center
    setBallVisible(true); // Ensure the ball is visible at the start
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-white">3 Box Shuffle Game</h1>
        <div className="flex justify-center space-x-4 mb-8">
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`w-24 h-24 border-4 rounded-md flex items-center justify-center cursor-pointer ${
                selectedBox === index ? 'bg-blue-500' : 'bg-white'
              } transition-colors duration-300 hover:shadow-lg hover:scale-105 transform transition-all`}
              onClick={() => handleBoxClick(index)}
            >
              {ballVisible && ballPosition === index && (
                <div className="w-8 h-8 bg-red-500 rounded-full transition-all duration-100 transform ease-in-out"></div>
              )}
            </div>
          ))}
        </div>
        {!shuffled ? (
          <button
            className="px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-md shadow-md hover:bg-blue-700 hover:scale-105 transition-all"
            onClick={startShuffle}
          >
            Start
          </button>
        ) : (
          <>
            {shuffling ? (
              <button
                className="px-8 py-4 bg-yellow-600 text-white text-xl font-semibold rounded-md shadow-md hover:bg-yellow-700 hover:scale-105 transition-all"
                onClick={stopShuffle}
              >
                Stop
              </button>
            ) : (
              <button
                className="px-8 py-4 bg-green-600 text-white text-xl font-semibold rounded-md shadow-md hover:bg-green-700 hover:scale-105 transition-all"
                onClick={restartGame}
              >
                Restart
              </button>
            )}
          </>
        )}
        {result && <div className="mt-8 text-2xl font-semibold text-white">{result}</div>}
      </div>
    </div>
  );
};

export default ShuffleGame;
