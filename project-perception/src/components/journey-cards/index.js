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
    var filteredAry = props.choices.filter(function(e) { return e !== props.ending })
    let choices = filteredAry.map((choice) => {
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
                <CardText className="card-ending-text">You got the "{props.ending}" ending.</CardText>
            </CardBody>
            <button className="learn-how-to-help-btn" onClick={handleClick}>Learn how to help</button>
            {/* <CardPopup toggle={togglePop} data={props.popup} title={props.title} /> */}
        </Card>
    )
}

// TODO: popup is not coming up
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

    // const [popupHidden, setPopupHidden] = useState(true);
    // let className = 'hidden';
    // if (popupHidden) {
    //     className = '';
    // } else {
    //     className = 'hidden';
    // }

    // // when button is clicked
    // const togglePop = () => {
    //     setPopupHidden(!popupHidden);
    // }

    const [cards, setCards] = useState([]);
    
    // pull the choices from the database and create cards for each one 
    useEffect(() => {
        const allJourneysRef = firebase.database().ref('journeys').child(props.title);
        let cardHolder = [];
        allJourneysRef.once("value", (snapshot) => {
            let journeys = [];
            snapshot.forEach((childSnapshot) => { //iterates through each journey
                journeys.push(childSnapshot.val());
            });
            journeys = journeys.reverse(); // reverse array to get most recent at the beginning
            journeys.forEach((journey) => {
                let choices = Object.values(journey); //grabs all the choice values
                cardHolder.push(<JourneyCard key={choices + Math.random()} choices={choices} ending={journey.ending} toggle={togglePop} />);
            });
            setCards(cardHolder); // [JourneyCard, JourneyCard, ...]
        });
        window.value = cards.length; //global int variable to keep track of how many times user has gone through a story
    }, [cards]); // have argument to render (everytime "cards" change, callback function will be called)
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
            {/* <CardPopup toggle={togglePop} data={props.popup} title={props.title} /> */}
        </Container>
    )
}

export default JourneyList;

export function CardPopup(props) {
    // let ref = firebase.database().ref("journeys").child(props.title + "/" + (window.value - 1) + "/popup");
    // console.log(ref)

    let ending = props.data["ending"];
    let desc = props.data["desc"];
    let source = props.data["source"];
    let sourceText = props.data["sourceText"];

    let steps = props.data.data["steps"].map((step) => {
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
    if (props.dataref["source2"] != "") {
        source2 = <a href={props.data["source2"]}>{" & " + props.data["source2Text"]}</a>;
    }

    const handleClick = () => {
        console.log("here")
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