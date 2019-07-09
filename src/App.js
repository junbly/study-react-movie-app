import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch(`https://yts.lt/api/v2/list_movies.json?sort_by=like_count`)
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(e => console.log(e));
  }

  _rednerMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return <Movie 
        key={movie.id}
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    });
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