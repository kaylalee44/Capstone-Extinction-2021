import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function CaribouStoryHunterDeathContainer() {
    return(
        <div>
            <StoryTitle title="SURVIVAL" />
            <div className="story-container">
                <StoryImage id="hunting-img" className="gif ocean" src="img/hunting.jpg" alt="A sniper" />
                <div className="story-content ocean">
                    <p className="story-paragraph">
                        As you continue to go alone, a bang goes off. A hunter has just shot you. You wished you went with with the herd because it might have increased your chance of survival. <span className="death"><strong>You have been killed by the hunter.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Logging/Hunter" ending.</strong></p>
                    <p className="explanation">
                        With increased logging and large open spaces, woodland caribou are at a higher chance of getting hunted as they are easy to see and shoot.
                        Woodland caribou tend to move in herds, so by moving alone, it decreases its chance of surival and likelihood of getting shot and killed.
                    </p>
                    <TryAgain to="story-caribou-2" href="https://naturecanada.ca/discover-nature/endangered-species/woodland-caribou/" learnMore="Learn more about the Woodland Caribou" />
                </div>
            </div>    
        </div>
    );
}