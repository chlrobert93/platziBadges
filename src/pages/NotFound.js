import React from 'react';
import './styles/NotFound.css'
import { Link } from 'react-router-dom';

import robotCuate from '../images/robot-cuate.svg';

function NotFound() {
    return (

        <div className="robot">
             <div className="robot__text">
                <p className="root__header">Error 404</p>
                <p>página no encontrada</p>
                <Link to="/Badges" className="btn btn-primary">
                       Regresar                        
                </Link> 
             </div>
         </div>
    );
}

export default NotFound;


