import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

//dumb component
function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Columns">
            <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis 
                        text={synopsis}
                        maxLine='3'
                        ellipsis=' ...'
                        trimRight
                        baseOn='letters'
                    />
                    
                </div>
            </div>
        </div>
    )
}

//dumb component
function MoviePoster({poster, alt}) {
    return <img className="Movie__Poster" src={poster} title={alt} alt={alt} />
}

function MovieGenre({genre}) {
    return <span className="Movie_Genre">{genre}</span>
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenre.prototype = {
    genre: PropTypes.string.isRequired
}

export default Movie;

/* smart component
class Movie extends Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} alt="Movie Poster" />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}
*/

/* smart component
class MoviePoster extends Component {

    static propTypes = {
        poster : PropTypes.string.isRequired
    }

    render() {
      return (
        <img src={this.props.poster} alt="Movie Poster" />
      )
    }
}
*/