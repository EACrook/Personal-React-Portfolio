import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Projects() {
    const [projects] = useState([
        {
            name: "Just Kitten Around",
            description: "Kitty Translator was my first group project during my coding boot camp. My contributions included implementing Tailwind and setting up the GoogleRandomFontsAPI to randomize fonts with the jokes.",
            tools: "HTML, CSS, JavaScript, Tailwind"
        },
        {
            name: "Roast Me",
            description: "Roast Me was my second group project during coding boot camp and our first try at a full stack application. My contributions included: building a dataset using MySQL for ingredients, drinks, and roasts; calling data from the backend to display on the front end; saving user input to the backend and accessing it on the frontend in the form of a post.",
            tools: "HTML, CSS, JavaScript, Node, Express, MySQL, Handlebars, Sequelize, Bcrypt, Dotenv, Cloudinary, Heroku"
        },
        {
            name: "Coming Soon",
            description: "Stay tuned for the final project!",
            tools: "Will include React for sure."
        }
    ]);
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div class="project-1">
                <h3>{capitalizeFirstLetter(projects[0].name)}</h3>
                <h4>{projects[0].description}</h4>
                <p>{projects[0].tools}</p>
                <div>
                    <img
                        src={require(`../../assets/kitten-around/kitten-around.PNG`).default}
                        class="project-img"
                        alt="Kitten Around Example"
                    />
                </div>
            </div>
            <div class="project-2">
                <h3>{capitalizeFirstLetter(projects[1].name)}</h3>
                <h4>{projects[1].description}</h4>
                <p>{projects[1].tools}</p>
                <div>
                    <img
                        src={require(`../../assets/roast-me/roast-me.PNG`).default}
                        class="project-img"
                        alt="Roast Me Example"
                    />
                </div>
            </div>
            <div class="project-2">
                <h3>{capitalizeFirstLetter(projects[2].name)}</h3>
                <h4>{projects[2].description}</h4>
                <p>{projects[2].tools}</p>
                <div>
                    <img
                        src={require(`../../assets/coming-soon/coming-soon.jpg`).default}
                        class="project-img"
                        alt="Coming Soon Example"
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;