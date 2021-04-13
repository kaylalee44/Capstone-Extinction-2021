import React from 'react';

export default function PopUp(props) { 
    const handleClick = () => {
        props.toggle();
    }
    return(
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleClick}>&times;</span>
                <p>{props.definition}</p>
                <img id={props.id} className={props.className} src={props.src} alt={props.alt} />
            </div>
        </div>
    );
}