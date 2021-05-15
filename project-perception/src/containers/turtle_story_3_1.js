import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';
import { scroller } from "react-scroll";

export default function TurtleStorySurviveContainer() {
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
        "ending": "Survival",
        "desc": "After an adult female sea turtle nests, she returns to the sea, leaving her nest and the eggs within it to develop on their own. The amount of time the egg takes to hatch varies among the different species and is influenced by environmental conditions such as the temperature of the sand. The hatchlings do not have sex chromosomes so their gender is determined by the temperature within the nest. Here’s some ways to help increase the survival of the hatchlings:",
        "steps": ["Remove any leftover trash on the beach", "Avoid leaving pet food (intended for domesticated animals) outside as these food sources also may attract predatory wildlife", "Remember to minimize obstacles on your coastal property"],
        "volunteerLink": "https://www.coastsavers.org/index.php/wcc-cleanup/",
        "sourceText": "SEE Turtles",
        "source": "https://www.seeturtles.org/baby-turtles",
        "source2Text": "Dune Doctors",
        "source2": "https://dunedoctors.com/help-save-baby-sea-turtles/"
    };

    if (!window.endingsGotTurtle.includes("Survival")) {
        window.endingsGotTurtle.push("Survival");
        window.numEndingsGotTurtle += 1;
    }
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className={"story-container " + margins}>
                <StoryImage id="turtle-sand-img" className="gif jellyfish" src="img/turtle-survival.jpg" alt="A leatherback sea turtle on the sand image" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph">
                        You swim to the right side of the beach and shuffle your way onto the sand. You are able to nest and lay a clutch of 100 eggs. The eggs will incubate for approximately two months before emerging from the nest. <span className="survive"><strong>You hope for their survival.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the good ending and managed to survive.</strong></p>
                    <p className="num-endings-text">Number of endings gotten: {window.numEndingsGotTurtle}/6</p>
                    <TryAgain to="story-turtle-1" href="https://www.fisheries.noaa.gov/species/leatherback-turtle" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Leatherback Sea Turtle" />
                </div>
            </div>
            <div className={"journey-divider " + className}></div>
            <div className={"journey-container " + className}>
                <JourneyCardsContainer 
                    title={"NESTING"} 
                    ending={"Survival"}
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