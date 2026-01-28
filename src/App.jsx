import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import required components from react-router-dom
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Games from './components/Games'; 
import Analysis from './components/Analysis'; 
import Signup from './components/signup';
import Leaderboard from './components/Leaderboard';
import MathQuiz from './components/Games/MathQuiz';
import Rewards from './components/rewards';
import Puzzle from './components/Games/Puzzle';
import WordsGame from './components/Games/WordsGame';
import Sudoku from './components/Games/Soduku (1)';
import TicTacToe from './components/Games/TicTacToe';
import TypingGame from './components/Games/TypingGame'; 
import ShuffleGame from './components/Games/Shufflegame';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} /> {/* Define route for Home component */}
        <Route path="/games" element={<Games />} /> {/* Define route for Games component */}
        <Route path="/rewards" element={<Rewards/>} />
        <Route path="/analysis" element={<Analysis/>}/>
        <Route path="/signup"element={<Signup/>}/>
        <Route path="/leaderboard"element={<Leaderboard/>}/>
        <Route path="/mathquiz" element={<MathQuiz />} />
        <Route path="/puzzle" element={<Puzzle />} />{/* Define route for Puzzle component */}
        <Route path="/wordgames" element={<WordsGame />} />{/* Define route for Word Games component */}
        <Route path="/soduku" element={<Sudoku/>}/>
        <Route path="/tictactoe" element={<TicTacToe/>} />
        <Route path="/typing" element={<TypingGame/>} />{/* Define route for Typing Game component */}
        <Route path="/shuffelgame" element={<ShuffleGame/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
