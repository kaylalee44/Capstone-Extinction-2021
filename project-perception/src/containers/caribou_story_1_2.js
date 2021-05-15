import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';
import { scroller } from "react-scroll";

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
        "ending": "Predator",
        "desc": "Because oil, gas, and mining explorations are developing into the forests, it opens up the caribou’s previously isolated habitats. Predators such as wolves, lynx, cougars, coyotes, and bears are finding their way to prey on caribou in these areas. Here are some ways to help:",
        "steps": ["Support environmental organizations that protect wildlife habitats", "Be aware of forestry development projects", "Recycle and reduce use of paper"],
        "volunteerLink": "",
        "sourceText": "U.S. Fish and Wildlife Service",
        "source": "Nature Canada",
        "source2Text": "",
        "source2": ""
    };

    if (!window.endingsGotCaribou.includes("Predator")) {
        window.endingsGotCaribou.push("Predator");
        window.numEndingsGotCaribou += 1;
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
                    <p className="num-endings-text">Number of endings gotten: {window.endingsGotCaribou}/4</p>
                    <TryAgain to="/story-caribou-1" href="https://naturecanada.ca/discover-nature/endangered-species/woodland-caribou/" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Woodland Caribou" />
                </div>
            </div>
            <div className={"journey-divider " + className}></div>
            <div className={"journey-container " + className}>
                <JourneyCardsContainer 
                    title="SURVIVAL"
                    ending={"Predator"}
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