import React from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Aladin"
];

const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/9a/Aladdin_%28Official_2019_Film_Poster%29.png"
]

function App() {
  return (
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}/>
      <Movie title={movieTitles[1]} poster={movieImages[1]}/>
      <Movie title={movieTitles[2]} poster={movieImages[2]}/>
      <Movie title={movieTitles[3]} poster={movieImages[3]}/>
    </div>
  );
}

export default App;