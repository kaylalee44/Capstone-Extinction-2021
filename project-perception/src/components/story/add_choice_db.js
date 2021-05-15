import firebase from "firebase/app";
import "firebase/database";

const AddChoiceToDB = (event, storyEnded, ending) => {
    event.preventDefault();
    let t = event.target.textContent;
    let currentStory = window.name;

    let currentJourney = window.value + 1; 
    let ref = firebase.database().ref("journeys");
    
    // TODO: if user clicks try again and starts in the middle of a story, keep previous choices
    ref.once("value")
        .then(function(snapshot) {
            if (snapshot.child(currentStory).exists()) { // if the current story exists in database (ie. user has played story before)
                ref.child(currentStory + "/" + currentJourney).push(t); 
            } else {
                ref.child(currentStory + "/" + 0).push(t); 
            }
        });

    // if (storyEnded) {
    //     ref.child(currentStory + "/" + currentJourney).set({"ending": ending}); 
    // }
}

export default AddChoiceToDB;