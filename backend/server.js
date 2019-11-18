// dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

// create an instance of an express server
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));

// body parser
app.use(express.json());


app.get('/test', (req, res) => {
    try {
        res.send('working')
    } catch(error) {
        res.status(500).send(error)
    }      
})


// returns an array of artists based on a string search query
app.post('/', async (req, res) => {
    try {
        console.log(req.params);
        let { searchQuery } = req.body;
        const artistResult = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=${searchQuery}&apikey=${process.env.API_KEY}`);
        const artistData = JSON.parse(artistResult.data.split('callback(')[1].split(')')[0]);
        const artistList = artistData.message.body.artist_list;
        res.send(artistList);
    } catch(error) {
        res.status(500).send(error);
    }
})



app.get('/:id', async (req, res) => {
    try {
        // get the artist id from route params
        const id = req.params.id;
        // an array of an artists albums based on the artist id 
        const albumResult = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.albums.get?format=jsonp&callback=callback&artist_id=${id}&apikey=${process.env.API_KEY}`);
        const albumData = JSON.parse(albumResult.data.split('callback(')[1].split(')')[0]);
        const albumList = albumData.message.body.album_list
        // artist details based on artist id
        const artistResult = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.get?format=jsonp&callback=callback&artist_id=${id}&apikey=${process.env.API_KEY}`)
        const artistData = JSON.parse(artistResult.data.split('callback(')[1].split(')')[0]);
        const artistInfo = artistData.message.body.artist
        const artist = {
            albums: albumList,
            info: artistInfo
        }
        res.send(artist);
    } catch(error) {
        res.status(500).send(500);
    }
})


// define a port
const PORT = process.env.PORT || 5000;

// make the app listen on the specified port
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

