import React, {useState} from 'react';
import Nav from '../Navigation';


function Header(projects, setCurrentProject, currentProject, contactSelected, setContactSelected) {

    return (
        <header>
            <h3>
                <a href="/">
                    Emily Crook
                </a>
            </h3>
            <Nav></Nav>
        </header>
    )
}

export default Header;