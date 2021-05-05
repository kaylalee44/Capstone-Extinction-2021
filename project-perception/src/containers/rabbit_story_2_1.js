import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function RabbitStoryPredatorDeathContainer() {
    return(
        <div>
            <StoryTitle title="SEARCHING" />
            <div className="story-container">
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
                    <TryAgain to="/story-rabbit-2" href="https://www.fws.gov/sagebrush/wildlife/pygmy-rabbit/" learnMore="Learn more about the Columbia Basin Pygmy Rabbit" />
                </div>
            </div>   
        </div>
    );
}