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

    const handleClick = (event) => {
        if (props.title === "NESTING") { //keep track of each stories num journey card that is clicked
            window.numjourneyCardClicked = event.target.getAttribute("id"); 
        } else if (props.title === "SURVIVAL") {
            window.numjourneyCardClickedCaribou = event.target.getAttribute("id");
        } else if (props.title === "SEARCHING") {
            window.numjourneyCardClickedRabbit = event.target.getAttribute("id");
        }
        props.toggle();
    }

    return(
        <Card className="journey-card">
            <CardBody>
                <CardText tag="ol" className="card-text-choices">{choices}</CardText>
                <CardText className="card-ending-text">You got the "{props.ending}" ending.</CardText>
            </CardBody>
            <button className="learn-how-to-help-btn" id={props.keyCounter} onClick={handleClick}>Learn how to help</button>
        </Card>
    )
}

function JourneyList(props) {
    const [cards, setCards] = useState([]);
    const [popupData, setPopupData] = useState([]);

    const [seen, setSeen] = useState(false);
    const ref = firebase.database().ref('journeys').child(props.title);
    const togglePop = () => {
        ref.once("value", (snapshot) => { //popups
            let cardClicked = 0;
            if (props.title === "NESTING") {
                cardClicked = window.numjourneyCardClicked;
            } else if (props.title === "SURVIVAL") {
                cardClicked = window.numjourneyCardClickedCaribou;
            } else if (props.title === "SEARCHING") {
                cardClicked = window.numjourneyCardClickedRabbit;
            }
            if (cardClicked == null) {
                cardClicked = 0;
            }
            let popup = snapshot.val()[cardClicked].popup; //grab the correct popup information
            setPopupData(popup);
        });

        // toggle creation and deletion of popup
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
        allJourneysRef.once("value", (snapshot) => {
            let cardClicked = 0;
            if (props.title === "NESTING") {
                cardClicked = window.numjourneyCardClicked;
            } else if (props.title === "SURVIVAL") {
                cardClicked = window.numjourneyCardClickedCaribou;
            } else if (props.title === "SEARCHING") {
                cardClicked = window.numjourneyCardClickedRabbit;
            }
            let popup = snapshot.val()[cardClicked].popup; //grab the correct popup information
            window.currentPopupData = popup; //need this here on first render otherwise it popup data becomes undefined for some reason

            let journeys = [];
            snapshot.forEach((childSnapshot) => { //iterates through each journey
                journeys.push(childSnapshot.val());
            });
            // journeys = journeys.reverse(); // reverse array to get most recent at the beginning, TODO: issue is that the popup ids are in forward order
            let keyCounter = 0;
            journeys.forEach((journey) => {
                let choices = Object.values(journey); //grabs all the journey values
                choices.pop(); //to remove the popup data
                cardHolder.push(<JourneyCard key={choices + Math.random()} choices={choices} ending={journey.ending} toggle={togglePop} keyCounter={keyCounter} title={props.title} />);
                keyCounter++;
            });
            setCards(cardHolder); // [JourneyCard, JourneyCard, ...]
        });
    }, []); // have argument to render so all choices show up (everytime "cards" change, callback function will be called) - TODO: this creates an infinite render and the popup cards not show up tho..

    if (props.title === "NESTING") {
        window.value = cards.length; //global int variable to keep track of how many times user has gone through a story
    } else if (props.title === "SURVIVAL") {
        window.valueCaribou = cards.length;
    } else if (props.title === "SEARCHING") {
        window.valueRabbit = cards.length;
    }
    
    return (
        <Container className="journey-list-container">
            <h2 id="journey-list-title">Your Past "{props.title}" Story Interactions</h2>
            <p id="journey-list-subtitle">These previous journeys can help you see what endings you came across, to help prevent harm in the future.</p>
            {/* <div className="last-prev-text">
                <p id="last-journey-text">Your last journey:</p> 
                <p id="previously-text">Previously:</p>
            </div> */}
            <Row>
                {cards}
            </Row>
            {seen ? <CardPopup title={props.title} data={popupData} toggle={togglePop} /> : null}
        </Container>
    )
}

export default JourneyList;

export function CardPopup(props) {
    let data = props.data;
    if (data.length == 0) { //in case the data is empty
        data = window.currentPopupData;
    }
    let ending = data["ending"];
    let desc = data["desc"];
    let source = data["source"];
    let sourceText = data["sourceText"];

    let steps = data["steps"].map((step) => {
        let li = <li key={step}>{step}</li>;
        if (step.toLowerCase().includes("volunteer") && data["volunteerLink"] !== "") {
            li = <li key={step}><a href={data["volunteerLink"]}>{step}</a></li>;
        } 
        if (step.toLowerCase().includes("recovery") && data["recoveryLink"] !== "") {
            li = <li key={step}><a href={data["recoveryLink"]}>{step}</a></li>;
        }
        if (step.toLowerCase().includes("conservation") && data["conservationLink"] !== "") {
            li = <li key={step}><a href={data["conservationLink"]}>{step}</a></li>;
        }
        return li;
    });

    let source2 = <a></a>;
    if (data["source2"] != "") {
        source2 = <a href={data["source2"]}>{" & " + data["source2Text"]}</a>;
    }

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
                <p>Source: <a href={source}>{sourceText}</a>{source2}</p>
            </div>
        </div>
    );
}