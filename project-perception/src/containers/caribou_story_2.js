import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import { Link } from 'react-router-dom';

export default function CaribouStory2Container() {
    return(
        <div>
            <StoryTitle title="SURVIVAL" />
            <div className="story-container">
                <StoryImage id="caribou-chilling" className="gif jellyfish" src="img/caribou-lounge.jpg" alt="A couple of caribou sitting on a patch of grass" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph2">
                        There are not many acres left in the forest for you to continue your search. Many of the tress have been destroyed due to
                        their collection of timber. In the distance, you see a herd of other woodland caribou.
                    </p>
                    <p className="story-question">Where do you go?</p>
                    <div className="choice-container">
                        <Link to="/story-caribou-2-1" className="choice-btn">Continue to go alone.</Link>
                        <Link to="/story-caribou-3" className="choice-btn">Go up to them in hopes to join their herd.</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}