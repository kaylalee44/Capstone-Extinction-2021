import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';
import { scroller } from "react-scroll";

export default function RabbitStoryPredatorDeathContainer() {
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

    if (!window.endingsGotRabbit.includes("Predator")) {
        window.endingsGotRabbit.push("Predator");
        window.numEndingsGotRabbit += 1;
    }
    return(
        <div>
            <StoryTitle title="SEARCHING" />
            <div className={"story-container " + margins}>
                <StoryImage id="fox-gif" className="gif ending" src="img/fox.gif" alt="A fox gif" />
                <div className="story-content ending">
                    <p className="story-paragraph">
                        A fox comes out from the grass and starts to chase you as you have drawn attention to yourself. You are able to outrun him for a little while in short bursts, but without proper nutrients you can't sustain this speed for much longer.
                    </p>
                    <p className="story-paragraph2">
                     <span className="death"><strong> You're captured by the fox.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Predator" ending.</strong></p>
                    <p className="explanation">
                        Foxes are one of the preys of the Columbia Basin Pygmy Rabbit. Other preys are weasels, coyotes, badgers, bobcats, raptors, owls, ravens, and crows.
                        Being so small and having lots of predators, it results in many of them getting killed very easily.
                    </p>
                    <p className="num-endings-text">Number of endings gotten: {window.numEndingsGotRabbit}/4</p>
                    <TryAgain to="/story-rabbit-2" href="https://www.fws.gov/sagebrush/wildlife/pygmy-rabbit/" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Columbia Basin Pygmy Rabbit" />
                </div>
            </div>
            <div className={"journey-divider " + className}></div>
            <div className={"journey-container " + className}>
                <JourneyCardsContainer 
                    title="SEARCHING" 
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