import React from 'react';
import PropTypes from 'react';
import MainContainer from './MainContainer';
import ArtistInfo from './ArtistInfo';
import {space} from '../styles';
import queryHelpers from '../utils/queryHelpers';


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            artist: '',
            artistInfo: []
        }
    }
    componentWillMount() {
        var query = this.props.location.query;
        queryHelpers.getArtistInfo(query.artist)
                    .then(function(result) {
                        console.log(result);
                        this.setState({
                            artist: query.artist,
                            artistInfo: result
                        });
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
    }

    render() {
        return (
            <MainContainer>
                <h1>Results for: {this.state.artist}</h1>
            </MainContainer>

        )
    }
}

export default Results;

