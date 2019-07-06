import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  
  state = {
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
              title: "Matrix",
              poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
          },
          {
              title: "Full Metal Jacket",
              poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
          },
          {
              title: "Oldbody",
              poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
              title: "Aladin",
              poster: "https://upload.wikimedia.org/wikipedia/en/9/9a/Aladdin_%28Official_2019_Film_Poster%29.png"
          }
      ]
      })
    }, 2000);
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