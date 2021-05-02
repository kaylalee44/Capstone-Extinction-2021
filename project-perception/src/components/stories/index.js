import React, { useState } from "react";
import { Link } from 'react-router-dom';

function StoriesList(props) {
    const hideStories = () => {
        props.hideStories();
    }
    return(
        <div>
            <Link to="/">
                <BackStates />
            </Link>
            <StoriesTitle />
            <div className="stories-row"> 
                <ChooseSpecies id="caribou-pic" className="turtle-pic" src="img/caribou.jpg" alt="A woodland caribou" storyName="SURVIVAL" speciesName="Woodland Caribou" biome="forest" state="Idaho" hideStories={hideStories} />
                <ChooseSpecies id="turtle-pic" className="turtle-pic" src="img/leatherback-sea-turtle.jpg" alt="A leatherback sea turtle" storyName="NESTING" speciesName="LeatherBack Sea Turtle" biome="aquatic" state="Washington" hideStories={hideStories} />
                <ChooseSpecies id="bunny-pic" className="turtle-pic" src="img/rabbit.jpeg" alt="A Columbia Basin Pygmy Rabbit" storyName="SEARCHING" speciesName="Columbia Basin Pygmy Rabbit" biome="forest" state="California" hideStories={hideStories} />
            </div>
        </div>
    );
}

function BackStates() {
    return(
        <div className="back-to-states">
            <img id="left-arrow" className="left-arrow" src="img/arrow-left.png" alt="A left arrow logo" />
            <div>back to states</div>
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

let speciesName;

function ChooseSpecies(props) {
    const hideStories = () => {
        props.hideStories();
        speciesName = props.speciesName;
    }
    return(
        <div className="species-card" onClick={hideStories}>
            <div className="turtle-border">
                <img id={props.id} className={props.className} src={props.src} alt={props.alt} />
            </div>
            <p className="story-name">{props.storyName}</p>
            <p className="species-name"><i>{props.speciesName}</i></p>
            <div className="tags">
                <div className="tag-block">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3416 2.14999L17.8416 9.64999C18.1416 9.94999 18.3333 10.375 18.3333 10.8333C18.3333 11.2917 18.15 11.7083 17.8416 12.0083L12.0083 17.8417C11.7083 18.15 11.2916 18.3333 10.8333 18.3333C10.375 18.3333 9.95829 18.15 9.65829 17.85L2.15829 10.35C1.84996 10.0417 1.66663 9.62499 1.66663 9.16666V3.33332C1.66663 2.41666 2.41663 1.66666 3.33329 1.66666H9.16663C9.62496 1.66666 10.0416 1.84999 10.3416 2.14999ZM3.33329 9.16666L10.8333 16.675L16.6666 10.825L9.16663 3.32499V3.33332H3.33329V9.16666ZM5.41663 4.16666C4.72627 4.16666 4.16663 4.7263 4.16663 5.41666C4.16663 6.10701 4.72627 6.66666 5.41663 6.66666C6.10698 6.66666 6.66663 6.10701 6.66663 5.41666C6.66663 4.7263 6.10698 4.16666 5.41663 4.16666ZM7.91663 11.6667C7.6083 11.35 7.41663 10.9333 7.41663 10.4583C7.41663 9.51666 8.1833 8.74999 9.12497 8.74999C9.59163 8.74999 10.025 8.94166 10.3333 9.25832L10.8333 9.74999L11.3333 9.24999C11.6416 8.94166 12.0666 8.74999 12.5416 8.74999C13.4833 8.74999 14.25 9.51666 14.25 10.4583C14.25 10.925 14.0583 11.3583 13.75 11.6667L10.8333 14.5833L7.91663 11.6667Z" fill="black" fill-opacity="0.54"/>
                    </svg>
                    <div className="tag-name">{props.biome}</div>
                </div>
                <div className="tag-block">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3416 2.14999L17.8416 9.64999C18.1416 9.94999 18.3333 10.375 18.3333 10.8333C18.3333 11.2917 18.15 11.7083 17.8416 12.0083L12.0083 17.8417C11.7083 18.15 11.2916 18.3333 10.8333 18.3333C10.375 18.3333 9.95829 18.15 9.65829 17.85L2.15829 10.35C1.84996 10.0417 1.66663 9.62499 1.66663 9.16666V3.33332C1.66663 2.41666 2.41663 1.66666 3.33329 1.66666H9.16663C9.62496 1.66666 10.0416 1.84999 10.3416 2.14999ZM3.33329 9.16666L10.8333 16.675L16.6666 10.825L9.16663 3.32499V3.33332H3.33329V9.16666ZM5.41663 4.16666C4.72627 4.16666 4.16663 4.7263 4.16663 5.41666C4.16663 6.10701 4.72627 6.66666 5.41663 6.66666C6.10698 6.66666 6.66663 6.10701 6.66663 5.41666C6.66663 4.7263 6.10698 4.16666 5.41663 4.16666ZM7.91663 11.6667C7.6083 11.35 7.41663 10.9333 7.41663 10.4583C7.41663 9.51666 8.1833 8.74999 9.12497 8.74999C9.59163 8.74999 10.025 8.94166 10.3333 9.25832L10.8333 9.74999L11.3333 9.24999C11.6416 8.94166 12.0666 8.74999 12.5416 8.74999C13.4833 8.74999 14.25 9.51666 14.25 10.4583C14.25 10.925 14.0583 11.3583 13.75 11.6667L10.8333 14.5833L7.91663 11.6667Z" fill="black" fill-opacity="0.54"/>
                    </svg>
                    <div className="tag-name">{props.state}</div>
                </div>
            </div>
        </div>
    );
}

function StoriesDetail(props) {
    const hideStories = () => {
        props.hideStories();
    }
    let detail;
    if (speciesName === "LeatherBack Sea Turtle") {
        detail = <AnimalDetails id="turtle-pic" className="turtle-pic" src="img/leatherback-sea-turtle.jpg" alt="A leatherback sea turtle" storyTitle="NESTING" species={speciesName} scientificName="Dermochelys coriacea" ecosystem="Oceans" arrow="down-arrow-turtle" to="/story-turtle-1" hideStories={hideStories} />
    } else if (speciesName === "Woodland Caribou") {
        detail = <AnimalDetails id="caribou-pic" className="turtle-pic" src="img/caribou.jpg" alt="A woodland caribou" storyTitle="SURVIVAL" species={speciesName} scientificName="Rangifer tarandus caribou" ecosystem="Forest" arrow="down-arrow-caribou" to="/story-caribou-1" hideStories={hideStories} />
    } else if (speciesName === "Columbia Basin Pygmy Rabbit") {
        detail = <AnimalDetails id="rabbit-pic" className="turtle-pic" src="img/rabbit.jpeg" alt="A columbia basin pygmy rabbit" storyTitle="SEARCHING" species={speciesName} scientificName="Brachylagus Idahoensis" ecosystem="Shrubsteppe" arrow="down-arrow-rabbit" to="/story-rabbit-1" hideStories={hideStories} />
    }
    return (
        <div>
            {detail}
        </div>
    );
}

function AnimalDetails(props) {
    const hideStories = () => {
        props.hideStories();
    }
    return (
        <div className="animal-details">
            <BackToStories hideStories={hideStories} />
            <div className="details-title">
                <h1>{props.storyTitle}</h1>
                <img id={props.id} className={props.className} src={props.src} alt={props.alt} />
            </div>
            <div className="details-desc">
                <p><strong>Species:</strong> {props.species}</p>
                <p><strong>Scientific Name:</strong> {props.scientificName}</p>
                <p><strong>Ecosystem:</strong> {props.ecosystem}</p>
            </div>
            <div className="details-status">
                <p><strong>Status:</strong></p>
                <svg className={props.arrow} width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.583252 0.791626L10.9999 11.2083L21.4166 0.791626H0.583252Z" fill="white"/>
                </svg>
                <div className="status">
                    <p className="status-candidate">Candidate</p>
                    <p className="status-threatened">Threatened</p>
                    <p className="status-endangered">Endangered</p>
                </div>
            </div>
            <Link to={props.to} className="details-btn">Begin Story</Link>
        </div>
    );
}

function BackToStories(props) {
    const hideStories = () => {
        props.hideStories();
    }
    return (
        <div className="back-to-stories" onClick={hideStories}>
            <div>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8749 4.375C23.3374 4.375 24.8624 4.5625 26.2499 5C27.1874 5.3125 27.9999 5.6875 28.7499 6.25V24.5C28.7499 24.8125 28.4374 25.125 28.1249 25.125C27.9999 25.125 27.9374 25.125 27.8124 25.0625C26.0624 24.125 23.9374 23.75 21.8749 23.75C19.7499 23.75 16.6874 24.5625 14.9999 25.625C13.1874 24.25 10.5624 23.75 8.12494 23.75C6.31244 23.75 3.87494 24.3125 2.18744 25.125C2.12494 25.125 2.07806 25.1406 2.03119 25.1563C1.98431 25.1719 1.93744 25.1875 1.87494 25.1875C1.56244 25.1875 1.24994 24.875 1.24994 24.5625V6.25C3.06244 4.875 5.68744 4.375 8.12494 4.375C10.5624 4.375 13.1874 4.875 14.9999 6.25C16.8124 4.875 19.4374 4.375 21.8749 4.375ZM21.875 21.25C23.375 21.25 24.875 21.4375 26.25 21.875V7.49996C24.875 7.06246 23.375 6.87496 21.875 6.87496C19.75 6.87496 16.6875 7.68746 15 8.74996V23.125C16.6875 22.0625 19.75 21.25 21.875 21.25Z" fill="#E9E3CB"/>
                </svg>
                <div>back to stories</div>
            </div>
            <div>
                <svg className="audio-logo" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.13728 0.503174L0.49353 3.14692L8.66853 11.3219L8.12478 11.8844H0.62478V23.1344H8.12478L17.4998 32.5094V20.1532L25.3373 27.9907C24.1185 28.9094 22.7498 29.6407 21.2498 30.0719V33.9344C23.7623 33.3719 26.0685 32.2094 28.0185 30.6532L31.8623 34.4969L34.506 31.8532L3.13728 0.503174ZM13.75 23.4531L9.68129 19.3844H4.37504V15.6344H9.68129L11.3313 13.9844L13.75 16.4031V23.4531ZM29.8563 21.897C30.3438 20.5282 30.625 19.047 30.625 17.5095C30.625 11.5657 26.6688 6.54071 21.25 4.92821V1.06571C28.7688 2.77196 34.375 9.48446 34.375 17.5095C34.375 20.1157 33.775 22.572 32.725 24.7657L29.8563 21.897ZM17.5001 2.50939L13.975 6.03439L17.5001 9.55939V2.50939ZM21.25 9.95321C24.025 11.3407 25.9375 14.1907 25.9375 17.5095C25.9375 17.6595 25.9188 17.8095 25.9 17.9595L21.25 13.3095V9.95321Z" fill="#E9E3CB"/>
                </svg>
            </div>
        </div>
    );
}

export { StoriesList, StoriesDetail };