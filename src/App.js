import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  
  state = {
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
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies, // 기존의 영화 목록을 그대로 가져옴
          {
            title: "악인전",
            poster: "http://img.khan.co.kr/news/2019/05/06/l_2019050601000595800041521.jpg"
          }
        ]
      })
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;