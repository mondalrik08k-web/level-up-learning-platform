import { useState, useEffect } from 'react';


const initialBoard = Array(9).fill(null);

function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [round, setRound] = useState(1);
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winningLine, setWinningLine] = useState([]);
  const [roundTimes, setRoundTimes] = useState([]);
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    if (round > 1) {
      const endTime = Date.now();
      const timeTaken = (endTime - startTime) / 1000; // Time in seconds
      setRoundTimes(r => [...r, timeTaken]);
      setStartTime(Date.now());
    }
  }, [round, startTime]);

  const handleClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newBoard);
    if (winner) {
      handleRoundEnd(newBoard, winner.line);
    } else if (isBoardFull(newBoard)) {
      handleRoundEnd(newBoard, [], true);
    }
  };

  const handleRoundEnd = (newBoard = board, line = [], isDraw = false) => {
    if (isDraw) {
      alert("Match Draw");
    } else {
      const winner = calculateWinner(newBoard);
      if (winner) {
        if (winner.player === 'X') {
          setScore({ ...score, player1: score.player1 + 1 });
        } else {
          setScore({ ...score, player2: score.player2 + 1 });
        }
        setWinningLine(line);
      }
    }
    if (round < 10) {
      setRound(round + 1);
      setBoard(initialBoard);
      setIsXNext(true);
      setWinningLine([]);
    } else {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setRound(1);
    setScore({ player1: 0, player2: 0 });
    setGameOver(false);
    setWinningLine([]);
    setRoundTimes([]);
    setStartTime(Date.now());
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { player: board[a], line };
      }
    }
    return null;
  };

  const isBoardFull = (board) => {
    return board.every(cell => cell !== null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-400 to-sky-600 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">Tic Tac Toe</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {board.map((value, index) => (
            <button
              key={index}
              className={`w-20 h-20 text-2xl font-bold border-2 border-gray-300 rounded hover:bg-gray-200 ${
                winningLine.includes(index) ? 'bg-green-200 animate-pulse' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="mb-4">
          <p className="text-lg">Round: {round}/10</p>
          <p className="text-lg">Player 1 (X): {score.player1}</p>
          <p className="text-lg">Player 2 (O): {score.player2}</p>
        </div>
        {gameOver && (
          <div className="mb-4">
            <p className="text-lg text-red-500">Game Over!</p>
            <p className="text-lg">Round Times:</p>
            <ul className="text-lg">
              {roundTimes.map((time, index) => (
                <li key={index}>Round {index + 1}: {time} seconds</li>
              ))}
            </ul>
          </div>
        )}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          onClick={handleRestart}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
