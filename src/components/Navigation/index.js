import React from 'react';

function Nav() {
    const projects = [
        {
            name: "Kitty Translator",
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
    ]

   const handleClick = () => {
       console.log("click handled")
   }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="#about">About me</a>
                    </li>
                    <li>
                        <span href="#projects">Projects</span>
                    </li>
                    <li>
                        <span>
                            Resume
                        </span>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;