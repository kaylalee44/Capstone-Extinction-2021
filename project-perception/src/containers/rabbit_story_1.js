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
    let popupData = {
        "ending": "Climate Change",
        "desc": "Due to climate change, the pygmy rabbits’ ecosystem is expected to get warmer, drier, and prone to drought. These conditions will cause an increased likelihood of wildfires and kill the necessary sagebrush. The large scale loss of the native shrub is a major factor for the population’s decline. Here are some ways to help:",
        "steps": ["Reduce water waste", "Buy organic and local food", "Invest in energy-efficient appliances and bulbs", "Drive fuel-efficient vehicles"],
        "volunteerLink": "",
        "sourceText": "Washington Department of Fish and Wildlife",
        "source": "https://wdfw.wa.gov/species-habitats/species/brachylagus-idahoensis#climate",
        "source2Text": "Natural Resources Defense Council",
        "source2": "https://www.nrdc.org/stories/how-you-can-stop-global-warming"
    };
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
                        <button onClick={(e) => AddChoiceToDB(e, false, "", "")} className="choice-btn-container">
                            <Link to="/story-rabbit-2" className="choice-btn">Start a journey to find a different source of food.</Link>
                        </button>
                        <button onClick={(e) => AddChoiceToDB(e, true, "Climate Change", popupData)} className="choice-btn-container">
                            <Link to="/story-rabbit-1-2" className="choice-btn">Wait for rain to come and revive this sagebrush.</Link>
                        </button>
                    </div>
                </div>
            </div> 
            {seen ? <PopUp toggle={togglePop} definition="Sagebrush is a low bush found growing in the wild in the western United States. It is vital for the survival of at least 350 plants and animals. Sagebrush removes carbon from the atmosphere and consists of many different species." /> : null}     
        </div>
    );
}