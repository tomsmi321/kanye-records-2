import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const ArtistLinkDiv = styled.div`
    width: 30%;
    border-style: solid;
    margin: 0.5rem;
    background-color: #d5d8de;
    padding: 1rem;
    display: flex;
    justify-content: center;
`;


const ArtistsItem = ({ artist }) => {
    console.log(artist);
    let { artist_name } = artist.artist;
    let { artist_id } = artist.artist;
    return (
        <ArtistLinkDiv>
            <StyledLink to={`/${artist_id}`}>{artist_name}</StyledLink>
        </ArtistLinkDiv>
    )
}


export default ArtistsItem;