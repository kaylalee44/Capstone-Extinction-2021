# Project Perception 2021 (Capstone)

# Website link: https://project-perception-47835.web.app/

# Abstract

With 35,500 species being threatened with extinction around the world, the endangered species crisis is becoming severer each day. By educating high school and college students, they can be the leaders of change needed to protect our ecosystems. Project Perception is a website designed with the intention to push these students to learn more about endangered species by engaging in interactive stories that focus on overlooked species in different regions. With this project, we strive to help people realize the urgency of species decline and make sustainable lifestyle changes to make a positive impact on our ecosystems.

# What Our Code Includes

Within this code base, it includes all the code used to create our project for Capstone 2021, Project Perception. Our code includes various folders to help organize the code. It is broken up into components, containers, and pages. In the components folder, it includes a variety of React components which could be used to build more stories. In the containers folder, it contains the main content of the project that pulls from the components to build out the page. Lastly, in the pages folder, it contains the code that references the containers code, so that it can be displayed on the React app. There is also a constants folder which contains routes.js to put all the URLs in one place to make linking each of the different pages of the project much easier.

# How to Build The Code

A lot of the basis of the project has been prepared through the components folder where you can utilize those components to build more endangered species stories. The way our code is structured is if a component can be used for multiple page, it would be included in the components folder. In the containers folder, this is where most of the content goes and how the naming coventions work for the stories is by the endangered species and the page. The .js files that have one number represents pages that contains choices. The .js files that have two numbers represents the choice page that it is linked to and which choice is chosen. Once all the content has been added within the containers, you pass that component into the pages, which is then used to be displayed on the React App. The routes.js has constants that you continue to add if you are adding a Link to have pages connect to one another.

# How to deploy the code:

To deploy the code, we used Firebase hosting. To host on your own Firebase, you will need to follow the steps to connecting your Firebase project to the React application. 
To do so, you will need to run `firebase init`. Once your project has been has been connected with Firebase, you will need to run `npm run build`. Once the build finishes,
you can deploy the application to Firebase hosting by running the command, `firebase deploy`. 

For more details on how to host using Firebase: https://firebase.google.com/docs/hosting

# How to contribute:

Here's a list of things that we wanted to add but either didn't have time for it or couldn't figure out how to fix/implement it:

- Add more regions
- Add more stories
- Add more facts about each species
- Add more information on what can be done to help the animal endangerment crisis
- Fix bugs (journey cards render in weird order, automatic scrolling down when journey cards are shown, popups for journey cards, journey cards, etc.)
- Add audio to the stories
- Add mobile responsiveness
- Add a custom domain

# Contact information:

- Bryan Lin: linb8@uw.edu
- Samantha Chow: sschow@uw.edu
- Wenqin Ding: wding99@uw.edu
- Kayla Lee: kaylalee@uw.edu
