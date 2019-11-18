import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Artist from './components/Artist';
import axios from 'axios';
import Artists from './components/Artists';
import Nav from './components/Nav';
import About from './components/About';

class App extends Component {
  state = {
    artists: [],
    loadingArtists: false
  }

  searchArtists = async (searchQuery) => {
    // when the search Artists function is called set loadingArtists to true and render the  
    // loading spinner component 
    this.setState({loadingArtists: true})
    let result = await axios.post(`http://localhost:5000/`, {searchQuery: searchQuery});
    // set state for artists attribute
    let artists = result.data;
    this.setState({
        artists: artists,
        loadingArtists: false
    }) 
  }


  render() {
    let { artists, loadingArtists } = this.state;
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' render={(props) => ( 
            <>
              <Search searchArtists= {this.searchArtists}/>
              <Artists artists={artists} loadingArtists={loadingArtists}/>
            </>

          )}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/:id' render={(props) =>
            <Artist routeProps={props}/>
          }/>
        </Switch>
       
      </Router>
    )
  }

}

export default App;
