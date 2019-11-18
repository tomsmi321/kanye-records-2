import React, {Component} from 'react';
import axios from 'axios';
import Artists from './Artists';
import styled from 'styled-components';

const SubmitInput = styled.input.attrs({ 
    type: 'submit',
    value: 'search'
  })`
    background: #6e6968;
    color: #fff;
    cursor: pointer;
    margin: 0.4rem;
    padding: 0;
    text-transform: uppercase;
    width: 15%;
    border-radius: 5px;
    height: 1.75rem;
    border-color: transparent;
    box-shadow: 0px;
    transition: 0.15s;
    text-align: center;
    font-size: 1rem;
  `

const SearchInput = styled.input.attrs({ 
    type: 'text'
  })`
    border-radius: 5px;
    font-size: 1rem;
    height: 1.5rem;
    width: 25%;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
  `;


class Search extends Component {
    state = {
        artists: null,
        searchQuery: ''
    }

    onSubmit = async (e) => {
        e.preventDefault();
        // post search query to backend and get back the artists array
        let { searchQuery } = this.state;
        console.log(searchQuery);
        this.props.searchArtists(searchQuery);
        // reset state after the search 
        this.setState({searchQuery: ''});
    }

    onChangeSearchQuery = (e) => {
        let searchQuery = e.target.value;
        this.setState({
            searchQuery: searchQuery
        })
    }


    render() {
        return (
            <>
                <Form onSubmit={this.onSubmit}>

                    <SearchInput type="text"
                           className="search-bar"
                           value={this.state.searchQuery}
                           onChange={this.onChangeSearchQuery}
                           placeholder="eg. kanye"
                    />
                    <SubmitInput type="submit" value="search"/>
                </Form>
            </>
        )
    }
}

export default Search;


