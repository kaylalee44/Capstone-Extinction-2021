import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import { Link } from 'react-router-dom';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function RabbitStory2Container() {
    let popupData = {
        "ending": "Predator",
        "desc": "Pygmy rabbits are preyed upon by coyotes, badgers, bobcats, owls, foxes, and sometimes humans. Morality rates for this species can be as high as 50% in the first five weeks of life. Here are some ways to help:",
        "steps": ["Volunteer to protect local wildlife", "Support environmental organizations that protect wildlife habitats", "Read up on the recovery plan"],
        "volunteerLink": "",
        "recoveryLink": "https://ecos.fws.gov/docs/recovery_plan/Columbia%20Basin%20Pygmy%20Rabbit%20Final%20RP.pdf",
        "sourceText": "U.S. Fish and Wildlife Service",
        "source": "https://www.fws.gov/sagebrush/wildlife/pygmy-rabbit/",
        "source2Text": "",
        "source2": ""
    };
    return(
        <div>
            <StoryTitle title="SEARCHING" />
            <div className="story-container margins">
                <StoryImage id="grass-gif" className="gif jellyfish" src="img/grass.gif" alt="A grass gif" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph2">
                        You are in the middle of your trek to find food, and you hear a rustling sound coming from a distant patch of grass.
                    </p>
                    <p className="story-question">Where will you go?</p>
                    <div className="choice-container">
                        <button onClick={(e) => AddChoiceToDB(e, true, "Predator", popupData)} className="choice-btn-container">
                            <Link to="/story-rabbit-2-1" className="choice-btn">Run Away.</Link>
                        </button>
                        <button onClick={(e) => AddChoiceToDB(e, false, "", "")} className="choice-btn-container">
                            <Link to="/story-rabbit-3" className="choice-btn">Hide.</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}