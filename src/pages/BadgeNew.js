import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
import NavBar from '../components/NavBar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                   <img className="img-fluid" src={header} alt="Logo" /> 
                </div>


                <div className="container">
                    <div className="row">
                      <div className="col">
                         <Badge firstName="Eder" lastName="Chavarria" twitter="sparragus" jobTitle="Front-end Engineer" avatarURL="https://assets.pokemon.com/assets//cms2-es-es/img/watch-pokemon-tv/_tiles/broadcaster/season23-boing-169.png"    />
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;