import React, {useEffect, useState} from 'react';
import { 
    CardBody, 
    CardText, 
    Container, 
    Col, 
    Card, 
    Row 
} from 'reactstrap';
import "firebase/database";
import firebase from "firebase/app";

function JourneyCard(props) {
    let choiceCount = 0;
    let choices = props.choices.map((choice) => {
        choiceCount += 1;
        return <li className="no-style" key={choice}>Choice {choiceCount + ": " + choice}</li>
    });

    // TODO: add popups - just hard code in props to pop up and populate title, text, link, etc.
    // let handleClick = () => {
    //     <Popup />
    // }

    return(
        <Card className="journey-card">
            <CardBody>
                <CardText tag="ol">{choices}</CardText>
                {/* <CardText>You got the {props.ending} ending.</CardText> */}
            </CardBody>
            <button className="learn-how-to-help-btn">Learn how to help</button>
        </Card>
    )
}

function JourneyList() {
    const [cards, setCards] = useState([]);
    let currentStory = window.name;
    
    // pull the choices from the database and create cards for each one 
    useEffect(() => {
        const allJourneysRef = firebase.database().ref('journeys').child(currentStory);
        let cardHolder = [];
        allJourneysRef.once("value", (snapshot) => {
            let journeys = [];
            snapshot.forEach((childSnapshot) => { //iterates through each journey
                journeys.push(childSnapshot.val());
            });
            journeys = journeys.reverse(); // reverse array to get most recent at the beginning
            journeys.forEach((journey) => {
                let choices = Object.values(journey); //grabs all the choice values
                cardHolder.push(<JourneyCard key={choices + Math.random()} choices={choices} />);
            });
            setCards(cardHolder); // [JourneyCard, JourneyCard, ...]
        });
    }, []);

    return (
        <Container className="journey-list-container">
            <h2 id="journey-list-title">Your Past "{currentStory}" Story Interactions</h2>
            <p id="journey-list-subtitle">These previous journeys can help you see what endings you came across, to help prevent harm in the future.</p>
            <div className="last-prev-text">
                <p id="last-journey-text">Your last journey:</p>
                {/* <p id="previously-text">Previously:</p> */}
            </div>
            <Row>{cards}</Row>
        </Container>
    )
}

export default JourneyList;

// TODO: create pop up with correct data
export function CardPopup(props) {
    let ending = props.ending;
    let desc = props.desc;
    let steps = props.steps;
    let source = props.source;
    return (
        <div className="card-popup">
            <h2>Ocean Pollution</h2>
            <p>Marine pollution is a combination of chemicals and trash, most of which comes from land sources and is 
                washed or blown into the ocean. This pollution results in damage to the environment, to the health of 
                all organisms, and to economic structures worldwide. Here are some ways to help:</p>
            <ol>
                <li>Conserve water</li>
                <li>Reduce waste</li>
                <li>Use less energy</li>
                <li>Reduce vehicle pollution</li>
                <li><a href="https://www.coastsavers.org/index.php/wcc-cleanup/">Volunteer to clean up the beach</a></li>
            </ol>
        </div>
    );
}