import React from 'react';
import PropTypes from 'react';
import MainContainer from './MainContainer.js';
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
        this.setState({
            artist: query.artist
        });
    }
    componentDidMount() {
        this.setState({
            artistInfo: queryHelpers.getArtistInfo(this.state.artist)
        })
    }

    render() {
        return (
            <MainContainer>
                {this.state.artistInfo}
            </MainContainer>

        )
    }
}

export default Results;

