import React from 'react';
import './styles/BadgesList.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import Gravatar from './Gravatar';

import {Link} from 'react-router-dom';

class BadgesList extends React.Component{

    render(){
        if(this.props.badges.length ===0){
           return(
               <div>
                   <h3>No badges were found</h3>
                   <Link className="btn btn-primary" to="/badges/new">
                       Create new badge
                   </Link>
               </div>
           );
        };
        return(
            <ul className="list-unstyled">
               {this.props.badges.map((badge) => {
                 return(
                    <li className="BadList__container" key={badge.id}>
                        <div>
                        <Gravatar
                                className="BadgesListItem__avatar"
                                email={badge.email}
                                alt="Avatar"
                         />              
                        </div>
                        <div className="BadList__container__info">
                          <p className="BadList__name">
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