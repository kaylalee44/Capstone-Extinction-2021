import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';
import PopUp from '../components/story/popup';

export default function RabbitStoryClimateDeathContainer() {
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
                <StoryImage id="drought-gif" className="gif ending" src="img/drought.gif" alt="A drought gif" />
                <div className="story-content ending">
                    <p className="story-paragraph">
                        Although it's current winter, the <span className="highlight" onClick={togglePop}>climate has been shifting </span> recently and the area has been experiencing a drought. No rain comes. 
                    </p>
                    <p className="story-paragraph2">
                        <span className="death"><strong>You die within the next few days of starvation.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Climate Change" ending.</strong></p>
                    <p className="explanation">
                        Climate change is a huge issue that has been affecting our weather. Global warming is getting worse and worse and causing more
                        hot weather to occur and less rain to fall which greatly affects the livelihood of all species.
                    </p>
                    <TryAgain to="/story-rabbit-1" href="https://www.fws.gov/sagebrush/wildlife/pygmy-rabbit/" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Columbia Basin Pygmy Rabbit" />
                </div>
            </div>
            <div className={"journey-container " + className}>
                <div className="journey-divider"></div>
                <JourneyCardsContainer title="SEARCHING" />
            </div>
            {seen ? <PopUp toggle={togglePop} id="climate-change-chart" className="fishing-pot" src="img/climate-change-chart.jpeg" alt="A climate change chart" /> : null}   
        </div>
    );
}