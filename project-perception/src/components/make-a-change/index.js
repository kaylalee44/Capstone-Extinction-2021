import React from "react";

export default function MakeAChange() {
    return (
        <div>
            <Mission />
            <HowToHelp />
            <MeetTheTeam />
        </div>
    );
}

function Mission() {
    return (
        <div>
            <h1>Our Mission</h1>
            <p>
                There are over 1,300 endangered or threatened species in the United States alone, and more than 35,500 species are threatened with extinction around the world. Though people might have a broad understanding of this ongoing crisis, the impacts of species endangerment hit closer to home than one might expect. Our actions in our daily lives impact wildlife populations, ecosystems, and food chains, thus impacting us as well.
                <br/>
                We are called Project Perception because we have create interactive stories that put you in the shoes of these endangered species and bring to light to commonly overlooked endangered species due to their less widely popularized or marketable image. By learning about the different species that live around your area, you can help these species and protect them. We want this platform to show what can be done to make a big positive impact on our ecosystem with small actions.
            </p>
        </div>
    );
}

function HowToHelp() {
    return (
        <div>
            <h2>How To Help</h2>
            <p>You can make a difference and save multiple species just by making minor lifestyle changes and supporting species protection organizations. Learn how you can help.</p>
            <button>Make a Change</button>
        </div>
    );
}

function MeetTheTeam() {
    let wendy = {
        "name": "Wenqin Ding",
        "major": "Informatics & Psychology",
        "desc": "",
        "role": "Product Manager",
        "linkedin": "",
        "email": "",
        "profile-pic": ""
    }
    let bryan = {
        "name": "Bryan Lin",
        "major": "Informatics (Information Assurance & Cybersecurity)",
        "desc": "",
        "role": "Developer",
        "linkedin": "",
        "email": "",
        "profile-pic": ""
    }
    let kayla = {
        "name": "Kayla Lee",
        "major": "Informatics (Data Science)",
        "desc": "",
        "role": "Developer",
        "linkedin": "https://www.linkedin.com/in/kaylalee44/",
        "email": "kaylalee@uw.edu",
        "profile-pic": ""
    }
    let samantha = {
        "name": "Samantha Chow",
        "major": "Informatics (Biomedical Health Informatics)",
        "desc": "",
        "role": "UX Design/Research",
        "linkedin": "",
        "email": "",
        "profile-pic": ""
    }
    return (
        <div>
            <h2>Meet the Team</h2>
            <ProfileCard member={wendy}/>
            <ProfileCard member={bryan}/>
            <ProfileCard member={kayla}/>
            <ProfileCard member={samantha}/>
        </div>
    );
}

function ProfileCard(props) {
    return(
        <div>
            <img src={props.profile-pic}/>
            <div className="profile-desc-hover">
                <p>{props.desc}</p>
            </div>
            <div className="profile-details">
                <p>{props.name}</p>
                <p>{props.major}</p>
                <p>{props.role}</p>
                <a href={props.linkedin}>
                    <p>LinkedIn Logo</p>
                </a>
                <a href={props.email}>
                    <p>Email Logo</p>
                </a>
            </div>
        </div>
    );
}