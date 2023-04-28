import './About.css';

function About() {
    return (
        <div>
            <div className="about">
                <h1>GEoFFREY</h1>
                <h2>Geographic Estimator of Fairly Reasonable Reckoning Efficiency, Y'know?
                </h2>
                <p>
                    GEoFFREY was designed as a Geoguessr bot. Provide him with your favorite JPEG of some place in the world and through the power of magic (and a trusty ResNet) he will give you his best guess of which country the picture is from.
                </p>
                <p>
                    You can read more about our project <a href='https://melatfeseha.github.io/NNProjectProposal/'>here</a>.
                </p>
            </div>
        </div>
    );
}

export default About;