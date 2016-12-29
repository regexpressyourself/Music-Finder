import React from 'react';
import PropTypes from 'react';
import MainContainer from '../components/MainContainer';
import ArtistInfo from '../components/ArtistInfo';
import {space} from '../styles';
import queryHelpers from '../utils/queryHelpers';
import Loading from '../components/Loading';
import Results from '../components/Results';

class ResultsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            artist: '',
            artistInfo: [],
            isLoading: true
        }
    }
    componentDidMount() {
        let query  = this.props.location.query;
        let result = queryHelpers.getArtistInfo(query.artist, function(result) {
            this.setState({
                artist: query.artist,
                artistInfo: result,
                isLoading: false
            });
        }.bind(this));
    }

    render() {
        return (

            this.state.isLoading ?
            <Loading text="Waiting"/>:
            <div>
                <Results isLoading={this.state.isLoading}
                         query={this.props.location.query.artist}
                         artistInfo={this.state.artistInfo} />
            </div>
        )
    }
}

export default ResultsContainer;
