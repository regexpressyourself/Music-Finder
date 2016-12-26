import React         from 'react';
import ReactRouter   from 'react-router';
import { Link }        from 'react-router';
import MainContainer from './MainContainer';

class Home extends React.Component {
    render() {
        return (
                <MainContainer>
                <h1>Music Finder!</h1>
                <p className="lead">Find you some music</p>
                <Link to="/Search">
                <button type="button" className="btn btn-lg btn-black">Get Started</button>
                </Link>
                </MainContainer>
               )
    }
}

export default Home;
