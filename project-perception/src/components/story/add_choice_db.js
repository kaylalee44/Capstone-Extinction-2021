import firebase from "firebase/app";
import "firebase/database";

// TODO: determine if the story is over
        // add ending to card
        // add 1 to currentJourney (create a global variable for each story)
const AddChoiceToDB = (event) => {
    event.preventDefault();
    let t = event.target.textContent;
    let currentStory = window.name;
    let currentJourney = 0; //TODO: make this into a global variable
    let ref = firebase.database().ref("journeys");
    
    // TODO: if user clicks try again and starts in the middle of a story, keep previous choices
    // ref.once("value")
    //     .then(function(snapshot) {
    //         if (snapshot.child(currentStory).exists()) { // if the current story exists in database (ie. user has played story before)
    //             // let journeyExists = snapshot.child(currentStory).hasChild(currentJourney + "");
    //             // while (journeyExists) { 
    //             //     currentJourney++;
    //             //     journeyExists = snapshot.child(currentStory).hasChild(currentJourney + "");
    //             // }
    //             ref.child(currentStory + "/" + currentJourney).push(t); 
    //         } else {
    //             ref.child(currentStory + "/" + 0).push(t); 
    //         }
    //     });
    
    ref.child(currentStory + "/" + currentJourney).push(t); 
    // ref.child(currentStory + "/" + currentJourney).push(t); 
    // TODO: if choice leads to ending, add the ending to the db
    // ref.child(currentStory).child(currentJourney).set({
    //     "ending": t
    // }); 
}

export default AddChoiceToDB;