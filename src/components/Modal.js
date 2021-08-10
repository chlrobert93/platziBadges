import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Modal.css';

function Modal (props) {
    //Controlar si no esta abierto no mostrarlo
    if(!props.isOpen){
        return null;
    }
    return(
        ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal__container">
                   <button onClick={props.onClose} className="Modal__close-button">X</button>
                   {props.children/*Dentro del modal hay contenido 
                   siempre va venir de los children va especificar que en un futuro vamos a especificar de
                   que es este modal*/}
                </div>
            </div>,
            document.getElementById('modal'))
    );
}
export default Modal; 