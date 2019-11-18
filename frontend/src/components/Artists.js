import React from 'react';
import ArtistsItem from './ArtistsItem';
import LoadSpinner from './LoadSpinner';
import styled from 'styled-components';

const ArtistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Artists = ({ artists, loadingArtists }) => {
    console.log(`in artists: ${artists}`);

    if(loadingArtists) {
        return <LoadSpinner />
    } else {
        return (
            <ArtistsContainer>
                {artists.map((artist, index) => {
                    return <ArtistsItem artist={artist} key={index}/>
                })}
            </ArtistsContainer>
        )
    }   
    
}


export default Artists;
