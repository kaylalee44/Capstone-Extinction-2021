import React, {useState} from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import { Link } from 'react-router-dom';
import PopUp from '../components/story/popup';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function RabbitStory1Container() {
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
            <StoryTitle title="SEARCHING" />
            <div className="story-container margins">
                <StoryImage id="sagebush-img" className="gif jellyfish" src="img/sagebush.jpg" alt="A whole area of sagebush" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph">
                    You wake up early and feel the crisp air on your fur. You leave your burrow to find that the <span className="highlight" onClick={togglePop}>sagebush </span>
                     you normally eat from is wilted over, dying. You don't really understand how that could have happened, because you just ate from it yesterday. 
                    This is already the thrid bush this month that has died before your eyes. 
                    </p>
                    <p className="story-question">What will you do?</p>
                    <div className="choice-container">
                        <button onClick={AddChoiceToDB} className="choice-btn-container">
                            <Link to="/story-rabbit-2" className="choice-btn">Start a journey to find a different source of food.</Link>
                        </button>
                        <button onClick={AddChoiceToDB} className="choice-btn-container">
                            <Link to="/story-rabbit-1-2" className="choice-btn">Wait for rain to come and revive this sagebrush.</Link>
                        </button>
                    </div>
                </div>
            </div> 
            {seen ? <PopUp toggle={togglePop} definition="Sagebrush is a low bush found growing in the wild in the western United States. It is vital for the survival of at least 350 plants and animals. Sagebrush removes carbon from the atmosphere and consists of many different species." /> : null}     
        </div>
    );
}