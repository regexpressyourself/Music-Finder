import React from 'react';
import PropTypes from 'react';
import MainContainer from './MainContainer.js';

class Search extends React.Component {
    render() {
        return (
            <MainContainer>
                <h1>Find an artist</h1>
                <form onSubmit={props.onSubmitArtist}>
                    <label for="artist">Artist</label>
                    <input id="artist" name="artist" type="text" value="artist"/>
                    <button className="btn btn=lg btn-black" type="submit">Submit</button>
                    
                </form>
            </MainContainer>

        )
    }
}
Search.propTypes = {
  onSubmitArtist : React.PropTypes.func.isRequired,
}

export default Search;


