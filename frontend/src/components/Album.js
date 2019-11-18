import React from 'react';
import styled from 'styled-components';

const AlbumStyle = styled.div`
    display: flex;
    flex-direction: column;
    border-style: solid;
    width: 50%;
    margin: 1rem;
    align-items: center;
`;

const Album = ({album}) => {
    let { album: {album_id, album_name, album_rating, album_release_date, album_label} } = album
    console.log(album_id, album_name, album_rating, album_release_date, album_label);
    return (
        <AlbumStyle>
            <p><strong>ID: </strong>{album_id}</p>
            <p><strong>NAME: </strong>{album_name}</p>
            <p><strong>RATING: </strong>{album_rating}</p>
            <p><strong>RELEASE DATE: </strong>{album_release_date}</p>
            <p><strong>LABEL: </strong>{album_label}</p>
        </AlbumStyle>
    )
}

export default Album;