import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
    padding: 1rem;
`;


const About = () => {
    return (
        <AboutContainer> 
            <h1>About</h1>
            <p>Kanye Records is a react/express application that allows users to search for an artist using the musixmatch api and returns a list of artists that match the search term. You can then click on an artist to see that artist's profile and album catalogue</p>
        </AboutContainer>
        
    )
}


export default About;