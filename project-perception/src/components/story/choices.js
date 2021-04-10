import React from 'react';

export default function Choices(props) {
    let choices = props.choices || [];
    let choiceButtons = choices.map((choice, index) => {
        return <ChoiceButton  key={index} choice={choice} />;
    })
    return(
        <div className="choice-container">
            {choiceButtons}
        </div>
    );
}

function ChoiceButton(props) {
    return(
        <div>
            <button className="choice-btn">{props.choice}</button>
        </div>
    );
}