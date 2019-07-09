import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {}

  componentDidMount() {
    fetch(`https://yts.lt/api/v2/list_movies.json?sort_by=rating`)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(e => console.log(e));
  }

  _rednerMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._rednerMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;