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
        let { searchTerm } = req.body;
        const result = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=${searchTerm}&apikey=${process.env.API_KEY}`);
        const firstStep = result.data.split('callback(')[1];
        const secondStep = firstStep.split(')')[0];
        const final = JSON.parse(secondStep);
        const artistList = final.message.body.artist_list;
        res.send(artistList);
    } catch(error) {
        res.status(500).send(error);
    }
})


// returns an array of an artists albums based on the artist id passed into route params
app.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.albums.get?format=jsonp&callback=callback&artist_id=${id}&apikey=${process.env.API_KEY}`);
        const firstStep = result.data.split('callback(')[1];
        const secondStep = firstStep.split(')')[0];
        const final = JSON.parse(secondStep);
        const albumList = final.message.body.album_list
        res.send(albumList);
    } catch(error) {
        res.status(500).send(500);
    }
})


// define a port
const PORT = process.env.PORT || 5000;

// make the app listen on the specified port
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

