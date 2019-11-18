import React, { Component } from 'react';
import axios from 'axios';
import Album from './Album';
import LoadSpinner from './LoadSpinner';
import styled from 'styled-components';

const AlbumsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ArtistInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        font-size: 2rem;    
        text-decoration: none;
        color: black;
    }
    h1, h4 {
        text-transform: uppercase;
    }
`;

class Artist extends Component {
   state = { 
       albums: null,
       info: null,
       loading: true
    }

    componentDidMount = async () => {
        let { routeProps } = this.props;
        let artistId = routeProps.match.params.id;
        console.log(`in Artist component: ${artistId}`);
        // get request to backend to retrieve the artists albums based on the artist id
        let response = await axios.get(`http://localhost:5000/${artistId}`);
        let { albums, info } = response.data;
        console.log(info);
        this.setState({
            albums: albums,
            info: info,
            loading: false
        })
    }

    displayAlbums = () => {
        let { albums } = this.state;
        return albums.map((album, index) => {
            return (
                <AlbumsContainer>
                    <Album album={album} key={index}/>
                </AlbumsContainer>
            )
        })
    }

    displayArtistInfo = () => {
        let { info } = this.state;
        let { artist_id, artist_name, artist_rating, artist_twitter_url } = info
        return (
            <ArtistInfoContainer>
                <h1>{artist_name}</h1>
                <h4>Rating: {artist_rating}</h4>
                <a target="_blank" href={artist_twitter_url}><i class="fa fa-twitter"></i></a>
            </ArtistInfoContainer>
        )
    }

    render = () => {
        let { loading } = this.state;
        if(loading) {
            return <LoadSpinner />
        } else {
            return (
                <>
                    {this.displayArtistInfo()}
                    {this.displayAlbums()}
                </>
            )
        }
        
    }
}

export default Artist