import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/database";

export default function TryAgain(props) {
    const handleClick = () => {
        props.handleClick();
    }

    const addPreviousChoices = () => { // add past choices if user starts in the middle of the story
        if (props.to.includes("2") || props.to.includes("3")) {
            let ref = firebase.database().ref("journeys");
            let currentStory = window.name;
            let currentJourney = 0; 
            let pastChoices = [];
            if (currentStory === "NESTING") {
                currentJourney = window.value; 
                window.pastChoices.pop();
                pastChoices = window.pastChoices;
            } else if (currentStory === "SURVIVAL") {
                currentJourney = window.valueCaribou;
                window.pastChoicesCaribou.pop();
                pastChoices = window.pastChoicesCaribou;
            } else if (currentStory === "SEARCHING") {
                currentJourney = window.valueRabbit;
                window.pastChoicesRabbit.pop();
                pastChoices = window.pastChoicesRabbit;
            }
            ref.child(currentStory + "/" + currentJourney).set(pastChoices); 
            if (props.to.includes("2")) {
                if (currentStory === "NESTING") {
                    window.pastChoices = [window.pastChoices.shift()];
                } else if (currentStory === "SURVIVAL") {
                    window.pastChoicesCaribou = [window.pastChoicesCaribou.shift()];
                } else if (currentStory === "SEARCHING") {
                    window.pastChoicesRabbit = [window.pastChoicesRabbit.shift()];
                }
            } else if (props.to.includes("3")) {
                if (currentStory === "NESTING") {
                    window.pastChoices = window.pastChoices.slice(0, 2);
                } else if (currentStory === "SURVIVAL") {
                    window.pastChoicesCaribou = window.pastChoicesCaribou.slice(0, 2);
                } else if (currentStory === "SEARCHING") {
                    window.pastChoicesRabbit = window.pastChoicesRabbit.slice(0, 2);
                }
            }
        } else {
            window.pastChoices = [];
            window.pastChoicesCaribou = [];
            window.pastChoicesRabbit = [];
        }
    }
    return(
        <div>
            <a href={props.href} target="_blank" rel="noreferrer" className="learn-more">{props.learnMore}</a>
            <div className="ending-container">
                <button className="ending-btn" onClick={handleClick}>{props.buttonText}</button>
                <button onClick={addPreviousChoices} className="try-again ending-btn">
                    <Link to={props.to} className="try-again-link">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 7.5V2.5L8.75 8.75L15 15V10C19.1375 10 22.5 13.3625 22.5 17.5C22.5 21.6375 19.1375 25 15 25C10.8625 25 7.5 21.6375 7.5 17.5H5C5 23.025 9.475 27.5 15 27.5C20.525 27.5 25 23.025 25 17.5C25 11.975 20.525 7.5 15 7.5Z" fill="#3A444D"/>
                        </svg>
                        Try Again
                    </Link>
                </button>
            </div>
        </div>
    );
}