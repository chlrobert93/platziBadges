import React from 'react';
import './styles/BadgesList.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import Gravatar from './Gravatar';

import { Link } from 'react-router-dom';

function useSearchBadges(badges) {


  const [query, setQuery] = React.useState("");
  const [filterdBadges, setfilterdBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setfilterdBadges(result);
  }, [badges, query]);

  return {query, setQuery, filterdBadges}
}

function BadgesList (props){
    const badges = props.badges;
    const { query,setQuery, filterdBadges} = useSearchBadges(badges);
        if(filterdBadges.length === 0){
           return (
             <div>
               <div className="form-sgroup">
                 <label>Filter Bages</label>

                 <input
                   type="text"
                   className="form-control BadgesList__input"
                   value={query}
                   onChange={(e) => {
                     console.log(e.target.value);
                     setQuery(e.target.value);
                   }}
                 />
               </div>
               <h3>No badges were found</h3>
               <Link className="btn btn-primary" to="/badges/new">
                 Create new badge
               </Link>
             </div>
           );
        }
        return(
            <div className="BadgesList">
             <div className="form-sgroup">
                 <label>Filter Bages</label>

                 <input type="text" className="form-control BadgesList__input" 
                  value={query}
                  onChange={(e) => {
                      console.log(e.target.value)
                      setQuery(e.target.value)
                  }}
                 />

              </div>
              <ul className="list-unstyled">
               {filterdBadges.map((badge) => {
                 return(               
                    <li className="BadList__container" key={badge.id}>                         
                        <Link className="BadList__container__text text-reset text-decoration-none"
                            to={`/badges/${badge.id}`}>
                            <div>
                                <Gravatar
                                    className="BadgesListItem__avatar"
                                    email={badge.email}
                                    alt="Avatar"/>              
                            </div>
                            <div className="BadList__container__info">
                                <p className="BadList__name">
                                    <FontAwesomeIcon icon={faUserTie} />
                                    {badge.firstName} 
                                    {badge.lastName}
                                </p> 
                                <p  className="twitter">
                                    <FontAwesomeIcon icon={faTwitter} /> @{badge.twitter}
                                </p>
                                <p>
                                    {badge.jobTitle}
                                </p>  
                            </div>
                        </Link>
                    </li>         
                )
              }
              )}
           </ul>        
        </div>
        );
    
}

export default BadgesList;