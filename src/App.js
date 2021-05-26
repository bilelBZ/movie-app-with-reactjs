import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviedata } from "./data";
import AddMovie from "./components/AddMovie/AddMovie";
import Filter from "./components/filter/Filter";
import MovieList from "./components/movielist/MovieList";
import { useState } from "react";
import {  BrowserRouter as Router, Route} from "react-router-dom";
import MovieCardDetails from "./components/movieCardDetails/MovieCardDetails";

function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0)
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating)
  };
  const handleAdd = (newMovie) => {
    setMovielist([...movielist,newMovie])
  }
  
  return (
    
      <Router>
      <Filter handleChange={handleChange} title={title} ratingChanged={ratingChanged} />
      <Route path='/' exact render={ () => <MovieList
        movielist={movielist.filter((movie) =>
          movie.title.trim().toLowerCase().includes(title.trim().toLowerCase()) && movie.rate>=rate
        )}
      />} />

      <AddMovie handleAdd = {handleAdd} />
      <Route path='/MovieCardDetails/:id' render={(props)=> <MovieCardDetails {...props} movieList={movielist} exact/>}
      />
      </Router>
    
  );
}


export default App;
