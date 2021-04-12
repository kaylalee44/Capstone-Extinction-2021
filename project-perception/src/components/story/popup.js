import React from 'react';

export default function PopUp(props) { 
    const handleClick = () => {
        props.toggle();
    }

    return(
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={handleClick}>&times;</span>
                <p>I'm a pop up!!!</p>
            </div>
        </div>
    );
}