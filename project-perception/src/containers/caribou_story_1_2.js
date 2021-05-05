import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function CaribouStoryPredatorDeathContainer() {
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
            <StoryTitle title="SURVIVAL" />
            <div className={"story-container " + margins}>
                <StoryImage id="plastic-img" className="gif ending" src="img/wolf.gif" alt="A wolf gif" />
                <div className="story-content ending">
                    <p className="story-paragraph">
                        By crossing the open space, it made you visible to a wolf. A wolf spots you and charges you. <span className="death"><strong>It catches up to you and kills you.</strong></span>
                    </p>
                    <p className="story-paragraph2">
                        <span className="death"><strong>You have been eaten.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Predator" ending.</strong></p>
                    <p className="explanation">
                        Trees provide security and allow the Woodland Caribou to hide to increase their chance of survival. With lots of foresting
                        and less trees, it creates more open space allowing wolves to see these caribou resulting in them getting hunted down.
                    </p>
                    <TryAgain to="/story-caribou-1" href="https://naturecanada.ca/discover-nature/endangered-species/woodland-caribou/" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Woodland Caribou" />
                </div>
            </div>
            <div className={"journey-container " + className}>
                <div className="journey-divider"></div>
                <JourneyCardsContainer title="SURVIVAL" />
            </div>
        </div>
    );
}