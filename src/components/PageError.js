import React from 'react';

import './styles/PageError.css';


import { Link } from 'react-router-dom';

function PageError (props) {
    return(  
        <div className="dog">
            <div className="dog__text">
            <p className="dog__header">{props.error.message}</p>
            <p className="root__header__pa">página no encontrada</p>
            <Link to="/" className="btn btn-primary btn-regresar">
                    Regresar                        
            </Link> 
            </div>
        </div>
    );
};
   

export default PageError;