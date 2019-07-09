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
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/>
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