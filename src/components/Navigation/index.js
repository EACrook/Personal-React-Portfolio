import React from 'react';

function Nav() {


//    const handleClick = () => {
//        console.log("click handled")
//    }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="#about">About me</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
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