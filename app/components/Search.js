import React from 'react';
import PropTypes from 'react';
import MainContainer from './MainContainer.js';
import {space} from '../styles';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {artist:''}
        this.onSubmitArtist = this.onSubmitArtist.bind(this);
        this.onUpdateArtist = this.onUpdateArtist.bind(this);
    }
    onSubmitArtist(e) {
        e.preventDefault();
        console.table(this.props);
        this.context.router.push({
            pathname: '/results',
            query: {
                artist: this.state.artist
                }
            });

    }
    onUpdateArtist(e) {
        this.setState({
            artist: e.target.value
        });
    }
    render() {
        return (
            <MainContainer>
                <h1>Find an artist</h1>
                <div className="col-sm-6 col-sm-offset-3">
                    <form onSubmit={this.onSubmitArtist}>
                        <div className="form-group">
                            <input id="artist"
                                   name="artist"
                                   type="text"
                                   className="form-control"
                                   placeholder="Artist"
                                   onChange={this.onUpdateArtist}
                                   value={this.state.artist} />
                            <br/>
                            <button className="btn btn=lg btn-black" style={space} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </MainContainer>

        )
    }
}
Search.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default Search;


