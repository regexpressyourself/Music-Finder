import { id, sec } from './querysecrets';
let axios = require('axios');
let param = "?client_id=" + id + "&client_secret=" + sec;

function sanitizeResult(attribute) {
    return attribute ? attribute : '';
}

function optimizeResults(data){
    console.log(data);
    let newObject = {id:'',
                     name:'',
                     image:'',
                     href:'',
                     genre:''}

    newObject.genre = sanitizeResult(data.genres[0]);
    newObject.id    = sanitizeResult(data.id);
    newObject.href  = "https://play.spotify.com/artist/"+newObject.id;
    if (data.images.length > 0) {
        newObject.image = sanitizeResult(data.images[0].url);
    }
    else {
        newObject.image = "https://developer.spotify.com/wp-content/uploads/2016/07/icon3@2x.png"
        }
    newObject.name  = sanitizeResult(data.name);
    return newObject;

}

let helpers = {
    getArtistInfo: function (artist, callback){
        axios.get('https://api.spotify.com/v1/search/', {
            params: {
                q: artist,
                type: 'artist',
                client_id: id,
                client_secret: sec
            }
        })
                     .then(function (response) {
                         let data = response.data.artists.items;
                         let optimizedData = data.map(optimizeResults);
                         callback(optimizedData);
                     })
                     .catch(function (error) {
                         console.log("error: " +error);
                     })
    }
};
export default helpers;
