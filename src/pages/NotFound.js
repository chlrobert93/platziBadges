import React from 'react';
import './styles/NotFound.css'
import { Link } from 'react-router-dom';



function NotFound() {
    return (
        
        <div className="robot">
             <div className="robot__text">
                <p className="root__header">Error 404</p>
                <p className="root__header__pa">página no encontrada</p>
                <Link to="/Badges" className="btn btn-primary btn-regresar ">
                       Regresar                        
                </Link> 
             </div>
         </div>
         
    );
}

export default NotFound;


