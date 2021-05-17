import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import { Link } from 'react-router-dom';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function RabbitStory3Container() {
    return(
        <div>
            <StoryTitle title="SEARCHING" />
            <div className="story-container margins">
                <StoryImage id="fox-plain" className="gif jellyfish" src="img/fox-plain.jpg" alt="A fox looking around in a plain" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph2">
                        You find a spot to hide within the grass and remain completely still. A fox comes out from the grass and sniffs the air, then walks away.
                        After you check the coast is clear, you continue your journey. Finally, you come across a bunchgrass that you think looks good to eat.
                    </p>
                    <p className="story-question">Will you eat it?</p>
                    <div className="choice-container">
                        <button onClick={(e) => AddChoiceToDB(e, true, "Lack of Genetic Diversity")} className="choice-btn-container">
                            <Link to="/story-rabbit-3-1" className="choice-btn">You're so hungry you just eat this grass.</Link>
                        </button>
                        <button onClick={(e) => AddChoiceToDB(e, true, "Survival")} className="choice-btn-container">
                            <Link to="/story-rabbit-3-2" className="choice-btn">There might be a sagebrush in the distance if you wait a little longer.</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}