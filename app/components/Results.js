import React from 'react';
import PropTypes from 'react';
import MainContainer from './MainContainer';
import ArtistInfo from './ArtistInfo';
import {space} from '../styles';
import queryHelpers from '../utils/queryHelpers';
import Loading from './Loading';
import ResultsContainer from '../containers/ResultsContainer';

class Results extends React.Component{
    constructor(props){
        super(props);
        this.artistList = [];
        this.state = {
            isLoading:  false,
            query: this.props.query,
            artistInfo: []
        }
    }
    componentDidMount() {
        if(this.props.artistInfo.length > 0) {
            this.setState({
                isLoading: this.props.isLoading,
                artistInfo: this.props.artistInfo
            });
            let i = 0;
            this.artistList = this.props.artistInfo.map((artist) => 
                <ArtistInfo
                    key={artist.id}
                    _name={artist.name}
                    _image={artist.image}
                    _href={artist.href}
                    _genre={artist.genre}
                />
            );
        }
    }
    render() {
        return (
            this.state.isLoading ?
            <Loading text="Waiting"/>:
            <MainContainer>
                <h1>Results for: {this.state.query}</h1>
                {this.artistList}
            </MainContainer>
        )
    }
}
Results.propTypes = {
    artistInfo: React.PropTypes.array,
    isLoading: React.PropTypes.bool,
    query: React.PropTypes.string
}


export default Results;
