import firebase from "firebase/app";
import "firebase/database";

const AddChoiceToDB = (event) => {
    event.preventDefault();
    let t = event.target.textContent;
    let currentStory = window.name;
    let currentJourney = 0;
    let ref = firebase.database().ref("journeys");
    
    // TODO: get exists() and numChildren() to work
    // if (ref.child(currentStory).exists()) {
    //     console.log("exists!");
    //     ref.once("value")
    //         .then(function(snapshot) {
    //             currentJourney = snapshot.child(currentStory).numChildren() + 1;
    //         });
    // }

    ref.child(currentStory + "/" + currentJourney).push(t); 
    
    // TODO: if choice leads to ending, add the ending to the db
    // ref.child(currentStory).child(currentJourney).set({
    //     "ending": t
    // }); 
}

export default AddChoiceToDB;