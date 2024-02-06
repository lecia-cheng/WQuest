import React, { useEffect } from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from './Assets/logo.png'

const Home = () => {
    return (    
    <div className="App">
        <img className="logo" src={logo}></img>
    </div>
    );
};
 
export default Home;