import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {}

  componentDidMount() {
    console.log(fetch(`https://yts.lt/api/v2/list_movies.json?sort_by=rating`));
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