import React, {useEffect, useState} from 'react';
import { CardBody, CardText, Container, Col, Card, Row } from 'reactstrap';

// takes in a story (ex. story1)
function JourneyCard(props) {
    let choices = props.results.map((choice) => {
        return <li key={choice}>{choice}</li>
    });

    let handleClick = () => {
        <Popup />
    }

    return(
        <Col style={{flex: 1}}>
            <Card>
                <CardBody>
                    <CardText tag="ol">{choices}</CardText>
                    <CardText>You got the {props.ending} ending.</CardText>
                    <Button className="learn-how-to-help-btn" handleClick={handleClick}>Learn how to help</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

// takes in a specific story (ex. story1)
function JourneyList(props) {
    const [cards, setCards] = useState([]);
    
    // pull the choices from the database and create cards for each one 
    useEffect(() => {
        const allChoicesRef = firebase.database().ref('choices');
        allChoicesRef.on('value', (snapshot) => {
            const allChoicesObj = snapshot.val()
            let objectKeysArray = Object.keys(allChoicesObj); //grabs all the choices keys
            let allChoices = objectKeysArray.map((key) => { // [[choice1, choice2], [choice1, choice2], ...]
                let singleChoicesObj = allChoicesObj[key];
                singleChoicesObj.key = key;
                return singleChoicesObj;
            });

            let cardHolder = [];
            for (let choices of allChoices) {
                cardHolder.push(<JourneyCard key={choices} results={choices} />);
            }

            setCards(cardHolder); // [JourneyCard, JourneyCard, ...]
        })
    }, []);

    return (
        <Container className={"journey " + props.className}>
            <Row style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>{cards}</Row>
        </Container>
    )
}

export default JourneyList;

function Popup(props) {
    let ending = props.ending;
    let desc = props.desc;
    let steps = props.steps;
    let source = props.source;
    return (
        <div>
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