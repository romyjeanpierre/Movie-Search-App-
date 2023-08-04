import logo from './logo.svg';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import {useState, useEffect} from "react";


function App() {
  const apiKey = '98e3fb1f'

  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    const data = await res.json()
    console.log(data);
    setMovie(data)
  }

  return (
    <div className="App">
      <Form getMovie={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;