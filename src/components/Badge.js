import React from 'react';
import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{

  render() {
    return(
      <div className="Badge">
       <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" /> 
        </div> 

        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/29/1468960520-mewtwo.jpg?resize=480:*" alt="Avatar"/>
          <h1>Eder <br/> Chavarria</h1>
        </div>

        <div className="Badge__section-info">
          <h3>Front Engineer</h3>
          <div>@sparragus</div>
        </div>

        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    );
  }
}

export default Badge;