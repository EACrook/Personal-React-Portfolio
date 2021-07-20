import React from 'react';
import portrait from "../../assets/me-photo/me-photo.jpg";

function About() {
    return (
        <section>
            <h2>Getting Personal</h2>
            <div id="about" class="about">
            <img id="profile-pic" src={portrait} alt="portrait" />
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                </p>
            </div>
            </div>
        </section>
    )
}

export default About;