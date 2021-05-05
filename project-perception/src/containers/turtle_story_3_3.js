import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function TurtleStoryHarvestDeathContainer() {
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
            <StoryTitle title={"NESTING"} />
            <div className={"story-container " + margins}>
                <StoryImage id="people-beach-img" className="gif ocean" src="img/people-beach.jpg" alt="A person running along the beach image" />
                <div className="story-content ocean">
                    <p className="story-paragraph">
                        You swim to the left side of the beach and shuffle onto the sand. As you make your way to nest, humans rush towards you and brutually kill you for your meat and eggs. <span className="death"><strong>You have died.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Direct Harvest of Turtles and Eggs" ending.</strong></p>
                    <p className="explanation">
                        Sea turtles were often killed for meat and eggs to be consumed in some countries. Now, those countries have protected
                        leatherback turtles but in some places adult female leatherback turtles are killed for their eggs.
                    </p>
                    <TryAgain to="story-turtle-3" href="https://www.fisheries.noaa.gov/species/leatherback-turtle" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Leatherback Sea Turtle" />
                </div>
            </div>
            <div className={"journey-container " + className}>
                <div className="journey-divider"></div>
                <JourneyCardsContainer title={"NESTING"} />
            </div> 
        </div>
    );
}