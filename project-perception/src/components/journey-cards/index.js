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
    var filteredAry = props.choices.filter(function(e) { return e !== props.ending });
    let choices = filteredAry.map((choice) => {
        choiceCount += 1;
        return <li className="no-style" key={choice}>Choice {choiceCount + ": " + choice}</li>
    });

    const handleClick = () => {
        props.toggle();
        console.log("button here")
    }

    return(
        <Card className="journey-card">
            <CardBody>
                <CardText tag="ol" className="card-text-choices">{choices}</CardText>
                <CardText className="card-ending-text">You got the "{props.ending}" ending.</CardText>
            </CardBody>
            <button className="learn-how-to-help-btn" onClick={handleClick}>Learn how to help</button>
        </Card>
    )
}

// TODO: popup is not coming up
function JourneyList(props) {
    const [cards, setCards] = useState([]);
    const [popups, setPopups] = useState([]);

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
    
    // pull the choices from the database and create cards for each one 
    useEffect(() => {
        const allJourneysRef = firebase.database().ref('journeys').child(props.title);
        let cardHolder = [];
        let popupHolder = [];
        allJourneysRef.once("value", (snapshot) => {
            let journeys = [];
            snapshot.forEach((childSnapshot) => { //iterates through each journey
                journeys.push(childSnapshot.val());
            });
            journeys = journeys.reverse(); // reverse array to get most recent at the beginning
            journeys.forEach((journey) => {
                let choices = Object.values(journey); //grabs all the journey values
                let popup = choices.pop();
                console.log("im here")
                cardHolder.push(<JourneyCard key={choices + Math.random()} choices={choices} ending={journey.ending} toggle={togglePop} />);
                popupHolder.push(<CardPopup title={props.title} data={popup} toggle={togglePop} />);
            });
            setCards(cardHolder); // [JourneyCard, JourneyCard, ...]
            setPopups(popupHolder); 
        });
    }, [cards]); // have argument to render (everytime "cards" change, callback function will be called)
    
    window.value = cards.length; //global int variable to keep track of how many times user has gone through a story
    return (
        <Container className="journey-list-container">
            <h2 id="journey-list-title">Your Past "{props.title}" Story Interactions</h2>
            <p id="journey-list-subtitle">These previous journeys can help you see what endings you came across, to help prevent harm in the future.</p>
            {/* <div className="last-prev-text">
                <p id="last-journey-text">Your last journey:</p> 
                <p id="previously-text">Previously:</p>
            </div> */}
            <Row>{cards}</Row>
            {seen ? popups : null}
        </Container>
    )
}

export default JourneyList;

export function CardPopup(props) {
    let ending = props.data["ending"];
    let desc = props.data["desc"];
    let source = props.data["source"];
    let sourceText = props.data["sourceText"];

    let steps = props.data["steps"].map((step) => {
        let li = <li key={step}>{step}</li>;
        if (step.toLowerCase().includes("volunteer") && props.data["volunteerLink"] !== "") {
            li = <li key={step}><a href={props.data["volunteerLink"]}>{step}</a></li>;
        } 
        if (step.toLowerCase().includes("recovery") && props.data["recoveryLink"] !== "") {
            li = <li key={step}><a href={props.data["recoveryLink"]}>{step}</a></li>;
        }
        if (step.toLowerCase().includes("conservation") && props.data["conservationLink"] !== "") {
            li = <li key={step}><a href={props.data["conservationLink"]}>{step}</a></li>;
        }
        return li;
    });

    let source2 = <a></a>;
    if (props.data["source2"] != "") {
        source2 = <a href={props.data["source2"]}>{" & " + props.data["source2Text"]}</a>;
    }

    const handleClick = () => {
        props.toggle();
        console.log("x button")
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
                <p>Source: <a href={source}>{sourceText}</a>{source2}</p>
            </div>
        </div>
    );
}