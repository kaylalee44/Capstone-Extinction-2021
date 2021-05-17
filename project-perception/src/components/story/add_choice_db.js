import firebase from "firebase/app";
import "firebase/database";

const AddChoiceToDB = (event, storyEnded, ending) => {
    event.preventDefault();
    let t = event.target.textContent;
    window.pastChoices.push(t);

    let currentStory = window.name;
    let currentJourney = window.value; 
    let ref = firebase.database().ref("journeys");
    
    ref.once("value")
        .then(function(snapshot) {
            if (snapshot.child(currentStory).exists()) { // if the current story exists in database (ie. user has played story before)
                ref.child(currentStory + "/" + currentJourney).push(t); 
            } else {
                ref.child(currentStory + "/" + 0).push(t); 
            }
        });

    if (storyEnded) {
        ref.child(currentStory + "/" + currentJourney + "/ending").set(ending); 
    }
}

export default AddChoiceToDB;