import React from 'react';

export default function StoryImage(props) {
    return(
        <div>
            <img id={props.id} className={props.className} src={props.src} alt={props.alt} />
        </div>
    );
}