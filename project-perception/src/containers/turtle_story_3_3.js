import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';
import { scroller } from "react-scroll";

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
        "ending": "Direct Harvest of Turtles and Eggs",
        "desc": "Although sea turtles have spiritual or mythological importance in many cultures around the world, this has not prevented humans from consuming their eggs or meat. In many coastal communities, especially in Central America and Asia, sea turtles are considered a food source. During the nesting season, hunters comb the beaches at night looking for nesting females. Often, they will wait until the female has deposited her eggs to kill her. Then, they take both the eggs and meat. In some countries, sea turtle eggs are prized as an aphrodisiac. Others customarily consume sea turtle meat in observance of religious holidays. Here are some ways to help:",
        "steps": ["Educate people about the effects of sea turtles going extinct and how endangered they are", "Patrol nesting beaches", "Relocating eggs to hatchers in locations where no other solution will work", "Push the government to impose limits on consumption"],
        "volunteerLink": "https://www.coastsavers.org/index.php/wcc-cleanup/",
        "sourceText": "Conserve Turtles",
        "source": "https://conserveturtles.org/information-sea-turtles-threats-harvest-consumption/",
        "source2Text": "",
        "source2": ""
    };

    if (!window.endingsGotTurtle.includes("Direct Harvest of Turtles and Eggs")) {
        window.endingsGotTurtle.push("Direct Harvest of Turtles and Eggs");
        window.numEndingsGotTurtle += 1;
    }
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className={"story-container " + margins}>
                <StoryImage id="people-beach-img" className="gif ocean" src="img/people-beach.jpg" alt="A person running along the beach image" />
                <div className="story-content ocean">
                    <p className="story-paragraph">
                        You swim to the left side of the beach and shuffle onto the sand. As you make your way to nest, humans rush towards you and brutually kill you for your meat and eggs.
                    </p>
                    <p className="story-paragraph2">
                        <span className="death"><strong>You have died.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Direct Harvest of Turtles and Eggs" ending.</strong></p>
                    <p className="explanation">
                        Sea turtles were often killed for meat and eggs to be consumed in some countries. Now, those countries have protected
                        leatherback turtles but in some places adult female leatherback turtles are killed for their eggs.
                    </p>
                    <p className="num-endings-text">Number of endings gotten: {window.numEndingsGotTurtle}/6</p>
                    <TryAgain to="story-turtle-3" href="https://www.fisheries.noaa.gov/species/leatherback-turtle" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Leatherback Sea Turtle" />
                </div>
            </div>
            <div className={"journey-divider " + className}></div>
            <div className={"journey-container " + className}>
                <JourneyCardsContainer 
                    title={"NESTING"} 
                    ending={"Direct Harvest of Turtles and Eggs"}
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