import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import { Link } from 'react-router-dom';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function TurtleStory1Container() {
    let popupData = {
        "ending": "Ocean Pollution",
        "desc": "Marine pollution is a combination of chemicals and trash, most of which comes from land sources and is washed or blown into the ocean. This pollution results in damage to the environment, to the health of all organisms, and to economic structures worldwide. Here are some ways to help:",
        "steps": ["Conserve water", "Reduce waste", "Use less energy", "Reduce vehicle pollution", "Volunteer to clean up the beach"],
        "volunteerLink": "https://www.coastsavers.org/index.php/wcc-cleanup/",
        "sourceText": "National Geographic",
        "source": "https://www.nationalgeographic.org/encyclopedia/marine-pollution/",
        "source2Text": "",
        "source2": ""
    };
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className="story-container margins">
                <StoryImage id="jelly-gif" className="gif jellyfish" src="img/jellyfish.gif" alt="A jellyfish gif" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph">2 years after you last nested you are returning to the beach to nest again. Your tough rubbery skin helps you glide
                        through the water, as it did for past generations ever since the dinosaur age. On your way, you spot what you believe
                        is a jellyfish. It looks good to eat!
                    </p>
                    <p className="story-question">What will you do?</p>
                    <div className="choice-container">
                        <button onClick={(e) => AddChoiceToDB(e, true, "Ocean Pollution/Marine Debris", popupData)} className="choice-btn-container">
                            <Link to="/story-turtle-1-1" className="choice-btn">Eat it.</Link>
                        </button>
                        <button onClick={(e) => AddChoiceToDB(e, false, "", "")} className="choice-btn-container">
                            <Link to="/story-turtle-2" className="choice-btn">Pass - I'm full.</Link>
                        </button>
                    </div>
                </div>
            </div>     
        </div>
    );
}