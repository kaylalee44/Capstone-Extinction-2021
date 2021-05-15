import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';
import { scroller } from "react-scroll";

export default function RabbitStoryGeneticDeathContainer() {
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
        "ending": "Lack of Genetic Diversity",
        "desc": "10,000 years ago the Columbia Basin pygmy rabbit became genetically isolated. Disease can easily kill off their species as there is only one known colony left in Washington with 50 individuals. Their lack of genetic diversity and inbreeding decreases their chance of survival when faced with major changes in diet or disease. Here are some ways to help:",
        "steps": ["Support environmental organizations that work to reestablish species population", "Read up on the recovery plan"],
        "volunteerLink": "",
        "recoveryLink": "https://ecos.fws.gov/docs/recovery_plan/Columbia%20Basin%20Pygmy%20Rabbit%20Final%20RP.pdf",
        "sourceText": "Washington Fish and Wildlife",
        "source": "https://www.fws.gov/wafwo/articles.cfm?id=149489590",
        "source2Text": "",
        "source2": ""
    };

    if (!window.endingsGotRabbit.includes("Lack of Genetic Diversity")) {
        window.endingsGotRabbit.push("Lack of Genetic Diversity");
        window.numEndingsGotRabbit += 1;
    }
    return(
        <div>
            <StoryTitle title="SEARCHING" />
            <div className={"story-container " + margins}>
                <StoryImage id="new-grass-img" className="gif ending" src="img/new-grass.jpg" alt="A field of different grass, not sagebush" />
                <div className="story-content ending">
                    <p className="story-paragraph">
                        Because this isn't the grass you normally eat, your digestive system isn't able to properly digest the food.
                    </p>
                    <p className="story-paragraph2">
                        <span className="death"><strong> You feel sick after a few hours and die.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Lack of Genetic Diversity" ending.</strong></p>
                    <p className="explanation">
                        Genetic variation is the raw material of evolution. Without genetic variation, a population cannot evolve in response
                        to changing environment variables and, as a result, may face an increased risk of extinction.
                    </p>
                    <p className="num-endings-text">Number of endings gotten: {window.numEndingsGotRabbit}/4</p>
                    <TryAgain to="/story-rabbit-3" href="https://www.fws.gov/sagebrush/wildlife/pygmy-rabbit/" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Columbia Basin Pygmy Rabbit" />
                </div>
            </div>
            <div className={"journey-divider " + className}></div>
            <div className={"journey-container " + className}>
                <JourneyCardsContainer 
                    title="SEARCHING" 
                    ending={"Lack of Genetic Diversity"}
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