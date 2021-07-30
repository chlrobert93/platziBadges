import React from 'react';
import './styles/BadgesList.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

class BadgesList extends React.Component{

    render(){
        return(
            <ul className="list-unstyled">
               {this.props.badges.map((badge) => {
                 return(
                    <li className="container" key={badge.id}>
                        <div>
                            <img className="avatar" src={badge.avatarUrl} alt=""/>
                        </div>
                        <div className="container__info">
                          <p className="name">
                              <FontAwesomeIcon icon={faUserTie} /> {badge.firstName} {badge.lastName}</p> 
                          <p  className="twitter">
                              <FontAwesomeIcon icon={faTwitter} /> @{badge.twitter}
                         </p>
                         <p>
                             {badge.jobTitle}
                         </p>  
                        </div>
                 
                  
                    </li>
                )
              })}
           </ul>
        );
    }
}

export default BadgesList;