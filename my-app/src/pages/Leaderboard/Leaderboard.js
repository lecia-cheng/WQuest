import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import FirstPlace from "../../Assets/FirstPlace.png";
import SecondPlace from "../../Assets/SecondPlace.png";
import ThirdPlace from "../../Assets/ThirdPlace.png";
import FourthPlace from "../../Assets/FourthPlace.png";
import FifthPlace from "../../Assets/FifthPlace.png";

import "./Leaderboard.css";


const leaderboardData = [
  { rank: 1, name: "Lecia", score: 100, testsWritten: 32, image: FirstPlace},
  { rank: 2, name: "Owen", score: 99, testsWritten: 32, image: SecondPlace},
  { rank: 3, name: "Ethan", score: 98, testsWritten: 32, image: ThirdPlace },
  { rank: 4, name: "Happy", score: 97, testsWritten: 32, image: FourthPlace},
  { rank: 5, name: "Steven", score: 96, testsWritten: 32, image: FifthPlace},
];

const LeaderBoard = () => {
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <h1 className="leaderboard-header">LEADERBOARD</h1>
        <div className="spacer"></div> {}
      </header>
      <div className="leaderboard-container">
        <div className="leaderboard-names-box">
          {leaderboardData.map((user, index) => (
            <div key={index} className="name-entry-container">
              <img
                src={user.image}
                alt={`Rank ${user.rank}`}
                        className={`rank-image ${user.rank === 4 ? 'fourth-place' : user.rank === 5 ? 'fifth-place' : ''}`}
              />
              <div className={`name-entry rank-${user.rank}`}>
                <div className="name">{user.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="leaderboard-scores-box">
          {leaderboardData.map((user, index) => (
            <div key={index} className="score-entry">
              <div className="score-section">
                <div className="score">{`${user.score}%`}</div>
                <div className="label">Overall Average</div>
              </div>
              <div className="divider"></div>
              <div className="tests-section">
                <div className="tests">{`${user.testsWritten}`}</div>
                <div className="label">Tests Written</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;