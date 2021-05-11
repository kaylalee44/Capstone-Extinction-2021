import React, {useEffect, useState} from 'react';
import { 
    CardBody, 
    CardText, 
    Container, 
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

    const handleClick = () => {
        props.toggle();
    }

    return(
        <Card className="journey-card">
            <CardBody>
                <CardText tag="ol" className="card-text-choices">{choices}</CardText>
                <CardText className="card-ending-text">You got the {props.ending} ending.</CardText>
            </CardBody>
            <button className="learn-how-to-help-btn" onClick={handleClick}>Learn how to help</button>
        </Card>
    )
}

// TODO: bug where the first card/first choice won't show up even though db is populated (prob somethign to do with how the choice is added to db)
function JourneyList(props) {
    const [seen, setSeen] = useState(false);
    const togglePop = () => {
        let seenCopy = seen;
        if (!seenCopy) {
            seenCopy = true; 
        } else {
            seenCopy = false;
        }
        setSeen(seenCopy);
    }
    const [cards, setCards] = useState([]);
    // let currentStory = window.name;
    
    // pull the choices from the database and create cards for each one 
    useEffect(() => {
        const allJourneysRef = firebase.database().ref('journeys').child(props.title);
        // console.log(allJourneysRef);
        let cardHolder = [];
        allJourneysRef.once("value", (snapshot) => {
            let journeys = [];
            snapshot.forEach((childSnapshot) => { //iterates through each journey
                journeys.push(childSnapshot.val());
            });
            journeys = journeys.reverse(); // reverse array to get most recent at the beginning
            journeys.forEach((journey) => {
                let choices = Object.values(journey); //grabs all the choice values
                cardHolder.push(<JourneyCard key={choices + Math.random()} choices={choices} ending={props.ending} toggle={togglePop} />);
            });
            setCards(cardHolder); // [JourneyCard, JourneyCard, ...]
        });
    }, []);

    return (
        <Container className="journey-list-container">
            <h2 id="journey-list-title">Your Past "{props.title}" Story Interactions</h2>
            <p id="journey-list-subtitle">These previous journeys can help you see what endings you came across, to help prevent harm in the future.</p>
            <div className="last-prev-text">
                {/* <p id="last-journey-text">Your last journey:</p> */}
                {/* <p id="previously-text">Previously:</p> */}
            </div>
            <Row>{cards}</Row>
            {seen ? <CardPopup toggle={togglePop} data={props.popup} /> : null}
        </Container>
    )
}

export default JourneyList;

// TODO: create pop up with correct data
export function CardPopup(props) {
    let ending = props.data["ending"];
    let desc = props.data["desc"];
    let source = props.data["source"];
    let sourceText = props.data["sourceText"];

    let steps = props.data["steps"].map((step) => {
        return <li key={step}>{step}</li>
    });

    const handleClick = () => {
        props.toggle();
    }
    return (
        <div className="ending-popup">
            <div className="ending-popup-content">
                <div>
                    <span className="close" onClick={handleClick}>&times;</span>
                </div>
                <h2>{ending}</h2>
                <p>{desc}</p>
                <ol>
                    {steps}
                </ol>
                <p>Source: <a href={source}>{sourceText}</a></p>
            </div>
        </div>
    );
}