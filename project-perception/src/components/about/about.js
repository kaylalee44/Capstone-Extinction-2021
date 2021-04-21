import React from 'react';
import { Link } from 'react-router-dom';

export function MissionStatement() {
    return(
        <div className="leopard-container">
            <img id="leopard-img" className="leopard-img" src="img/leopard.jpg" alt="A leopard in the forest" />
            <div className="mission-statement">
                <h1 className="about-header">OUR MISSION</h1>
                <div className="about-statement">
                    <p>
                        There are over <strong>1,300 endangered or threatened species</strong> in the United States alone, and more than <strong>35,500 species are threatened</strong> with extinction around the world.
                        Though people might have a broad understanding of this ongoing crisis, the impacts of species endangerment hit closer to home than one might expect. Our actions in our daily lives impact wildlife
                        populations, ecosystems, and food chains, thus impacting us as well.
                    </p>
                    <p>
                        We are called <strong>Project Perception</strong> because we have created interactive stories that put you in the shoes of these endangered
                        species and bring to light to commonly overlooked endangered species due to their less widely popularized or marketable image. By learning
                        about the different species that live around your area, you can help these species and protect them. We want this platform to show what can be done
                        to make a big positive impact on our ecosystem with small actions.
                    </p>
                </div>
            </div>
        </div>
    );
}

export function HowToHelp() {
    return(
        <div className="how-to-help">
            <h1>HOW TO HELP</h1>
            <p>You can make a difference and save multiple species just by making minor lifestyle changes and supporting species protection organizations. Learn how you can help.</p>
            <div className="change-container">
                <Link to="/make-a-change" className="change-btn">Make a Change</Link>
            </div>
        </div> 
    );
}

export function MeetTheTeam() {
    let wendyBlurb = "I would be really happy to help create this project and let more people realize the importance of protecting endangered animals and take actions to do so. I helped to research endangered animals, created surveys to learn about the user's needs, and helped to plan out the project processes. I will also help with the UI/UX design and development by taking the product manager role."
    let bryanBlurb = "The animal endangerment crisis is getting worse every year, yet no one has really taken the time to really acknowledge it. I am really excited about this project because I get to create something that could help spread awareness about this issue and help make it more known among the general public. As a developer, I programmed parts of the website to create an interactive experience for the user to be able to learn more about these endangered species."
    let kaylaBlurb = "I’ve always loved animals since I was a child and being able to work on a project that promotes awareness for animal endangerment is extremely rewarding. As a team member, I have helped with the preliminary research and content of the website. Additionally, as a developer, I have contributed to the front-end and back-end development of the product, implementing all of the pages using JavaScript / React, HTML, CSS, and AWS."
    let samanthaBlurb = "I never realized how interconnected our lives are with the livelihood of animals. With this project, I have a better understanding of the ripple effect that ultimately improves or destroys animal habitats and our ecosystems. I helped out with our project’s initial market/literature research and prototyping phases."
    return(
        <div>
            <h1 className="meet-team-header">MEET THE TEAM</h1>
            <div className="profile-row">
                <ProfileCard id="wendy-img" className="profile-pic" src="img/wendy.png" alt="Wendy" name="Wenqin Ding" major="Informatics &amp; Psychology" role="Product Manager" linkedin="https://www.linkedin.com/in/wendyd35/" mail="mailto:wding99@uw.edu" blurb={wendyBlurb} /> 
                <ProfileCard id="bryan-img" className="profile-pic" src="img/bryan.png" alt="Bryan" name="Bryan Lin" major="Informatics (Information Assurance &amp; Cybersecurity)" role="Developer" linkedin="https://www.linkedin.com/in/bryan-lin-a84458174/" mail="mailto:linb8@uw.edu" blurb={bryanBlurb} />
                <ProfileCard id="kayla-img" className="profile-pic" src="img/kayla.png" alt="Kayla" name="Kayla Lee" major="Informatics (Data Science)" role="Developer" linkedin="https://www.linkedin.com/in/kaylalee44/" mail="mailto:kaylalee@uw.edu" blurb={kaylaBlurb} />
                <ProfileCard id="samantha-img" className="profile-pic" src="img/samantha.png" alt="Samantha" name="Samantha Chow" major="Informatics (Biomedical Health Informatics)" role="UX Design/Research" linkedin="https://www.linkedin.com/in/samsachow/" mail="mailto:sschow@uw.edu" blurb={samanthaBlurb} />
            </div>
        </div>
    );
}

function ProfileCard(props) {
    return(
        <div className="profile">
            <div className="profile-pic-container">
                <img id={props.id} className={props.className} src={props.src} alt={props.alt} />
                <div className="overlay">
                    <div className="overlay-text">
                        <p>{props.blurb}</p>
                    </div>
                </div>
            </div>
            <div className="profile-content">
                <p className="profile-name">{props.name}</p>
                <p className="profile-major"><i>{props.major}</i></p>
                <p className="profile-role">{props.role}</p>
                <div className="about-links">
                    <a href={props.linkedin} target="_blank" rel="noreferrer">
                        <img id="linkedin-img" className="linkedin-img" src="img/linkedin.png" alt="LinkedIn logo" /> 
                    </a>
                    <a href={props.mail} target="_blank" rel="noreferrer">
                        <img id="mail-img" className="mail-img" src="img/mail.png" alt="Mail logo" /> 
                    </a>
                </div>
            </div>
        </div>
    );

}