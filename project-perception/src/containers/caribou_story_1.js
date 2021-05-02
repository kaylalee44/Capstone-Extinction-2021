import React, {useState} from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import { Link } from 'react-router-dom';
import PopUp from '../components/story/popup';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function CaribouStory1Container() {
    const [seen, setSeen] = useState(false);
    const togglePop = () => {
        let seenCopy = seen;
        if (!seenCopy) {
            seenCopy = true; 
        } else {
            seenCopy = false;
        }
        setSeen(seenCopy);
    }
    return(
        <div>
            <StoryTitle title="SURVIVAL" />
            <div className="story-container">
                <StoryImage id="lichen-gif" className="gif jellyfish" src="img/ground-lichen.gif" alt="A ground lichen gif" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph">It is winter and you are trudging along the snow. You are roaming the woodlands in search for food. You are by yourself with no other woodland caribou with you, so you continue
                    to roam in search of either a tree or <span className="highlight" onClick={togglePop}>ground lichens.</span> There is a large gap among the trees and you need to cross in search of food.
                    </p>
                    <p className="story-question">What will you do?</p>
                    <div className="choice-container">
                        <Link to="/story-caribou-2" className="choice-btn caribou-btn">Do not cross and continue to stay among the trees.</Link>
                        <Link to="/story-caribou-1-2" className="choice-btn caribou-btn">Cross the gap of open space.</Link>
                    </div>
                </div>
            </div> 
            {seen ? <PopUp toggle={togglePop} definition="Lichen is both a fungus and a plant, and is estimated that 6-8% of Earth's land surface is covered by them." id="lichen-def" className="lichen-def" src="img/lichen-branch.jpg" alt="A ground lichen on a branch"/> : null}     
        </div>
    );
}