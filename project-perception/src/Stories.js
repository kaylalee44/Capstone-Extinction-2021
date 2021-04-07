import React from 'react';

export default function Stories() {
    return(
        <div>
            <BackStates />
            <StoriesTitle />
            <ChooseSpecies />
        </div>
    );
}

function BackStates() {
    return(
        <div className="back-to-states">
            <img id="left-arrow" className="left-arrow" src="img/arrow-left.png" alt="A left arrow logo" />
            <p>back to states</p>
        </div>
    );
}
function StoriesTitle() {
    return(
        <div className="stories-title">
            <h1>Western Region</h1>
            <p>Choose the species' eyes you'd like to see through</p>
            <hr className="stories-divider"></hr>
        </div>
    );
}

function ChooseSpecies() {
    return(
        <div className="species-card">
            <div className="turtle-border">
                <img id="turtle-pic" className="turtle-pic" src="img/leatherback-sea-turtle.jpg" alt="A leatherback sea turtle" />
            </div>
            <p className="story-name">NESTING</p>
            <p className="species-name"><i>Leatherback Sea Turtle</i></p>
            <div className="tags">
                <div className="tag-block">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3416 2.14999L17.8416 9.64999C18.1416 9.94999 18.3333 10.375 18.3333 10.8333C18.3333 11.2917 18.15 11.7083 17.8416 12.0083L12.0083 17.8417C11.7083 18.15 11.2916 18.3333 10.8333 18.3333C10.375 18.3333 9.95829 18.15 9.65829 17.85L2.15829 10.35C1.84996 10.0417 1.66663 9.62499 1.66663 9.16666V3.33332C1.66663 2.41666 2.41663 1.66666 3.33329 1.66666H9.16663C9.62496 1.66666 10.0416 1.84999 10.3416 2.14999ZM3.33329 9.16666L10.8333 16.675L16.6666 10.825L9.16663 3.32499V3.33332H3.33329V9.16666ZM5.41663 4.16666C4.72627 4.16666 4.16663 4.7263 4.16663 5.41666C4.16663 6.10701 4.72627 6.66666 5.41663 6.66666C6.10698 6.66666 6.66663 6.10701 6.66663 5.41666C6.66663 4.7263 6.10698 4.16666 5.41663 4.16666ZM7.91663 11.6667C7.6083 11.35 7.41663 10.9333 7.41663 10.4583C7.41663 9.51666 8.1833 8.74999 9.12497 8.74999C9.59163 8.74999 10.025 8.94166 10.3333 9.25832L10.8333 9.74999L11.3333 9.24999C11.6416 8.94166 12.0666 8.74999 12.5416 8.74999C13.4833 8.74999 14.25 9.51666 14.25 10.4583C14.25 10.925 14.0583 11.3583 13.75 11.6667L10.8333 14.5833L7.91663 11.6667Z" fill="black" fill-opacity="0.54"/>
                    </svg>
                    <div className="tag-name">aquatic</div>
                </div>
                <div className="tag-block">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3416 2.14999L17.8416 9.64999C18.1416 9.94999 18.3333 10.375 18.3333 10.8333C18.3333 11.2917 18.15 11.7083 17.8416 12.0083L12.0083 17.8417C11.7083 18.15 11.2916 18.3333 10.8333 18.3333C10.375 18.3333 9.95829 18.15 9.65829 17.85L2.15829 10.35C1.84996 10.0417 1.66663 9.62499 1.66663 9.16666V3.33332C1.66663 2.41666 2.41663 1.66666 3.33329 1.66666H9.16663C9.62496 1.66666 10.0416 1.84999 10.3416 2.14999ZM3.33329 9.16666L10.8333 16.675L16.6666 10.825L9.16663 3.32499V3.33332H3.33329V9.16666ZM5.41663 4.16666C4.72627 4.16666 4.16663 4.7263 4.16663 5.41666C4.16663 6.10701 4.72627 6.66666 5.41663 6.66666C6.10698 6.66666 6.66663 6.10701 6.66663 5.41666C6.66663 4.7263 6.10698 4.16666 5.41663 4.16666ZM7.91663 11.6667C7.6083 11.35 7.41663 10.9333 7.41663 10.4583C7.41663 9.51666 8.1833 8.74999 9.12497 8.74999C9.59163 8.74999 10.025 8.94166 10.3333 9.25832L10.8333 9.74999L11.3333 9.24999C11.6416 8.94166 12.0666 8.74999 12.5416 8.74999C13.4833 8.74999 14.25 9.51666 14.25 10.4583C14.25 10.925 14.0583 11.3583 13.75 11.6667L10.8333 14.5833L7.91663 11.6667Z" fill="black" fill-opacity="0.54"/>
                    </svg>
                    <div className="tag-name">Washington</div>
                </div>
            </div>
        </div>
    );
}