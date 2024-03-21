import React, { useEffect } from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import SearchBar from "./searchBar";
import recenttest from '../../Assets/recenttests1.png';
import recenttest1 from '../../Assets/recenttests2.png';
import quiz from '../../Assets/quiz.png';
import leaderboard from '../../Assets/leaderboard.png';
import average from '../../Assets/average.png';
import summary from '../../Assets/summary.png';
import testswritten from '../../Assets/testswritten.png';
import Card from "./Cards/recentTestCard";
import laptop from '../../Assets/laptop.png';


const Home = () => {
    return (
        <div className="App">
            <div className='title'>


                <img className="logo" src={logo}></img>
                <div className="home-container">
                    <aside className="home-sidebar">
                        <nav>
                            <ul>
                                <li><button>Dashboard</button></li>
                                <li><button>Tests</button></li>
                                <li><button>Courses</button></li>
                                <li><button>Profile</button></li>
                                <li><button>Leaderboard</button></li>
                                <li><button>Dark mode</button></li>
                                <li><button>Settings</button></li>
                                <li><button>Log Out</button></li>
                            </ul>
                        </nav>
                    </aside>

                </div>

                <div class="home-main-content">
                    <header>
                        <div className="home-titles">
                            <div className="home-welcome">Welcome!</div>
                            <div className="home-subtitle">Here is your Profile Dashboard</div>
                        </div>
                        <div class="search-container">
                            <input type="text" class="search-input" placeholder="Search..."></input>
                            <button class="search-btn">🔍</button>
                        </div>
                    </header>
                    <section class="recent-tests">
                        <h2 className="home-section-title">Recent Tests</h2>
                        <div className="home-imgs">
                            <Card
                                image={laptop}
                                title="Hashsets"
                                percentage="75"
                            />
                            <Card
                                image={laptop}
                                title="Binary Tree"
                                percentage="20"
                            />
                        </div>
                        <img className="home-quiz" src={quiz}></img>

                    </section>
                    <section class="home-leaderboard">
                        <h2 className="home-section-title1">Leader Board</h2>
                        <img className="home-leaderboard" src={leaderboard}></img>

                        <div className="home-stats">
                            <img className="home-testswritten" src={testswritten}></img>
                            <img className="average" src={average}></img>

                        </div>
                        <img className="home-summary" src={summary}></img>
                    </section>
                    <aside class="statistics">

                    </aside>
                </div>

            </div>
        </div>
    );
};

export default Home;