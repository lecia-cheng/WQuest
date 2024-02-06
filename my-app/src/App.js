import logo from './logo.svg';
import './App.css';
import HomePage from './Home';
import LeaderBoard from './Leaderboard';
import ProblemSets from './ProblemSets/ProblemSets';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/leaderboard" element={<LeaderBoard/>}/>
        <Route path="/problemsets" element={<ProblemSets/>}/>
      </Routes> 
      </>
    </div>
  );
}

export default App;
