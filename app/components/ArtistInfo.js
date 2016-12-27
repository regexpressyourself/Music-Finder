import React from 'react';
import PropTypes from 'react';


class ArtistInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
        }
    render() {
        return (
            <div>
                hi
            </div>

        )
    }
}
ArtistInfo.contextTypes = {
    _name: React.PropTypes.string.isRequired,
    _image: React.PropTypes.string,
    _href: React.PropTypes.string.isRequired,
    _genre: React.PropTypes.string
};
export default ArtistInfo;
