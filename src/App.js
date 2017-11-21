import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitle = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImage = [
  "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
  "http://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/10/the-last-jedi-theatrical-blog.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitle[0]} poster={movieImage[0]}/>
        <Movie title={movieTitle[1]} poster={movieImage[1]}/>
        <Movie title={movieTitle[2]} poster={movieImage[2]}/>
        <Movie title={movieTitle[3]} poster={movieImage[3]}/>
      </div>
    );
  }
}

export default App;
