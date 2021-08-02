import React from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom'
import astro from '../images/astronauts.svg'
import logo from '../images/platziconf-logo.svg'

function Home (){
    return(
        <div className="Home">
        <div className= "Home__text">
            <img src={logo} alt="Platzi logo"/>
            <p>
                <h1 className="Home__titulo">Print your badges</h1>
                <p>The easiest way to manage your conference</p>
                <Link className="btn btn-primary" to="/badges">Start</Link>
            </p>
        </div>
        <dir className="Home__img">
            <img src={astro} alt="Astronauta"/>
        </dir>
    </div>
    );
}

export default Home;

