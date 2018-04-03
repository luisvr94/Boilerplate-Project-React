import React,{Component} from 'react';
import {createPortal} from 'react-dom';
import '../../css/modal.css';
function Modal (props){
    return (
      <div className="Modal">
        este modal
        {props.children}
        <button onClick={props.cerrarModal}>Cerrar</button>
      </div>
    )

}

export default Modal;
