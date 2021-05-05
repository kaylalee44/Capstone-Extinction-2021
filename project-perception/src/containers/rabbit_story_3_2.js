import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';
import PopUp from '../components/story/popup';

export default function RabbitStorySurviveContainer() {
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
    const [journeyHidden, setJourneyHidden] = useState(false);
    let className = 'hidden';
    let margins = 'margins';
    let buttonText = "View your Past Stories";
    if (journeyHidden) {
        className = '';
        margins = '';
        buttonText = "Hide your Past Stories";
    }

    // when button is clicked
    const handleClick = () => {
        setJourneyHidden(!journeyHidden);
    }
    return(
        <div>
            <StoryTitle title="SEARCHING" />
            <div className={"story-container " + margins}>
                <StoryImage id="burrow-rabbit" className="gif jellyfish" src="img/burrow-rabbit.jpg" alt="A rabbit living in its burrow" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph">
                        You finally find a growing sagebush! You decide to <span className="highlight" onClick={togglePop}>dig a burrow </span> under this plant and
                        <span className="survive"><strong> live to survive another day.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the good ending and managed to survive.</strong></p>
                    <TryAgain to="/story-rabbit-3" href="https://www.fws.gov/sagebrush/wildlife/pygmy-rabbit/" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Columbia Basin Pygmy Rabbit" />
                </div>
            </div>
            <div className={"journey-container " + className}>
                <div className="journey-divider"></div>
                <JourneyCardsContainer title="SEARCHING" />
            </div>
            {seen ? <PopUp toggle={togglePop} definition="Pygmy rabbits are the only North American rabbits that dig their own burrow. They alo use the burrows to birth and nurse their young and avoid predator detection." /> : null}   
        </div>
    );
}