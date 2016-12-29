import React from 'react';
import PropTypes from 'react';
import {artistImage} from '../styles';

class ArtistInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h2> {this.props._name} </h2>
                </div>
                <div className="col-xs-12">
                    <p> {this.props._genre} </p>
                </div>
                <a href={this.props._href}>
                    <div className="col-xs-6 col-xs-offset-3">
                        <img alt="artist image" className="img-responsive" style={artistImage} src={this.props._image}/>
                    </div>
                </a>
            </div>

        )
    }
}
ArtistInfo.contextTypes = {
    key: React.PropTypes.string,
    _name: React.PropTypes.string,
    _image: React.PropTypes.string,
    _href: React.PropTypes.string,
    _genre: React.PropTypes.string
};
export default ArtistInfo;
