import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function RabbitStoryGeneticDeathContainer() {
    return(
        <div>
            <StoryTitle title="SEARCHING" />
            <div className="story-container">
                <StoryImage id="new-grass-img" className="gif ending" src="img/new-grass.jpg" alt="A field of different grass, not sagebush" />
                <div className="story-content ending">
                    <p className="story-paragraph">
                        Because this isn't the grass you normally eat, your digestive system isn't able to properly digest the food.
                        <span className="death"><strong> You feel sick after a few hours and die.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Lack of Genetic Diversity" ending.</strong></p>
                    <p className="explanation">
                        Genetic variation is the raw material of evolution. Without genetic variation, a population cannot evolve in response
                        to changing environment variables and, as a result, may face an increased risk of extinction.
                    </p>
                    <TryAgain to="/story-rabbit-3" href="https://www.fws.gov/sagebrush/wildlife/pygmy-rabbit/" learnMore="Learn more about the Columbia Basin Pygmy Rabbit" />
                </div>
            </div>   
        </div>
    );
}