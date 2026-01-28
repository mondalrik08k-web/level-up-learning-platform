import { useState, useEffect } from 'react';

const Puzzle = () => {
  const [pieces, setPieces] = useState([]);
  const [time, setTime] = useState(0); // Timer state
  const [isCompleted, setIsCompleted] = useState(false); // Puzzle completion state
  const [timerInterval, setTimerInterval] = useState(null); // Store the interval ID for clearing

  useEffect(() => {
    const shuffledPieces = shuffleArray(createPieces());
    setPieces(shuffledPieces);
    setIsCompleted(false);
    setTime(0);

    // Start the timer
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    setTimerInterval(interval);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (pieces.length && pieces.every((piece, index) => piece.correctIndex === index)) {
      setIsCompleted(true);
      clearInterval(timerInterval); // Stop the timer
    }
  }, [pieces, timerInterval]);

  const createPieces = () => {
    const numPieces = 100; // 10x10 grid, so 100 pieces
    let piecesArray = [];
    for (let i = 0; i < numPieces; i++) {
      piecesArray.push({
        id: i,
        correctIndex: i,
        currentIdx: i,
      });
    }
    return piecesArray;
  };

  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('dragIndex', index);
  };

  const handleDrop = (event, dropIndex) => {
    const dragIndex = event.dataTransfer.getData('dragIndex');
    let newPieces = pieces.slice();
    [newPieces[dragIndex], newPieces[dropIndex]] = [newPieces[dropIndex], newPieces[dragIndex]];
    setPieces(newPieces);
  };

  const isCorrectPosition = (piece, index) => {
    return piece.correctIndex === index;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      {isCompleted && (
        <div className="mb-4 text-lg font-semibold text-green-600">
          Congratulations! You completed the puzzle in {time} seconds!
        </div>
      )}
      <div className="grid grid-cols-10 gap-1" style={{ width: '90vw', maxWidth: '600px', height: '90vw', maxHeight: '600px' }}>
        {pieces.map((piece, index) => (
          <div
            key={piece.id}
            draggable={!isCompleted} // Disable dragging after completion
            onDragStart={(event) => handleDragStart(event, index)}
            onDrop={(event) => handleDrop(event, index)}
            onDragOver={(event) => event.preventDefault()}
            className={`flex items-center justify-center border-2 border-gray-600 rounded-md shadow-md cursor-move
            ${isCorrectPosition(piece, index) ? 'bg-green-300' : 'bg-red-300'}`}
            style={{
              width: 'calc(90vw / 10)',
              height: 'calc(90vw / 10)',
              maxWidth: '60px',
              maxHeight: '60px',
            }}
          >
            {piece.id + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Puzzle;
