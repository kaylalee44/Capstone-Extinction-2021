import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';
import { scroller } from "react-scroll";

export default function CaribouStoryHunterDeathContainer() {
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
    const handleClick = () => { //TODO: figure out why it only works when u want to hide
        if (!journeyHidden) {
            scroller.scrollTo("journey-container", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
            });
        }
        setJourneyHidden(!journeyHidden);
    }

    const scrollToTop = () => {
        scroller.scrollTo("navbar-main", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
    };

    let popupData = {
        "ending": "Logging/Hunter",
        "desc": "Logging has been proven to be one of the major causes of caribou habitat degradation. Not only do these explorations remove trees, but it also supports the construction of new roads in the forest. These roads are providing access to recreational hunters, poachers, and snowmobiles. Here are some ways to help:",
        "steps": ["Support environmental organizations that protect wildlife habitats", "Be aware of forestry development projects", "Recycle and reduce use of paper", "Read up on recovery strategies and action plans", "Get involved with legislation, sign petitions"],
        "volunteerLink": "https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/recovery-strategies/woodland-caribou-boreal-population-2012.html",
        "sourceText": "Government of Canada",
        "source": "https://www.nrcan.gc.ca/our-natural-resources/forests/sustainable-forest-management/conservation-and-protection-canadas-forests/woodland-caribou-boreal-population/13201",
        "source2Text": "",
        "source2": ""
    };

    if (!window.endingsGotCaribou.includes("Logging/Hunter")) {
        window.endingsGotCaribou.push("Logging/Hunter");
        window.numEndingsGotCaribou += 1;
    }
    return(
        <div>
            <StoryTitle title="SURVIVAL" />
            <div className={"story-container " + margins}>
                <StoryImage id="hunting-img" className="gif ocean" src="img/hunting.jpg" alt="A sniper" />
                <div className="story-content ocean">
                    <p className="story-paragraph">
                        As you continue to go alone, a bang goes off. A hunter has just shot you. You wished you went with with the herd because it might have increased your chance of survival.
                    </p>
                    <p className="story-paragraph2">
                        <span className="death"><strong>You have been killed by the hunter.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Logging/Hunter" ending.</strong></p>
                    <p className="explanation">
                        With increased logging and large open spaces, woodland caribou are at a higher chance of getting hunted as they are easy to see and shoot.
                        Woodland caribou tend to move in herds, so by moving alone, it decreases its chance of surival and likelihood of getting shot and killed.
                    </p>
                    <p className="num-endings-text">Number of endings gotten: {window.endingsGotCaribou}/4</p>
                    <TryAgain to="story-caribou-2" href="https://naturecanada.ca/discover-nature/endangered-species/woodland-caribou/" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Woodland Caribou" />
                </div>
            </div>
            <div className={"journey-divider " + className}></div>
            <div className={"journey-container " + className}>
                <JourneyCardsContainer 
                    title="SURVIVAL"
                    ending={"Logging/Hunter"}
                    popup={popupData}
                />
                <div className="back-to-top-btn" onClick={scrollToTop}>
                    <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.15625 24.0781L19.5 9.76563L33.8438 24.0781L38.25 19.6719L19.5 0.921875L0.75 19.6719L5.15625 24.0781Z" fill="#E9E3CB"/>
                    </svg>
                    <p>back to top</p>
                </div>
            </div>
        </div>
    );
}