
import './App.css';
import MoviesList from './components/movieList';
import Carousels from './components/movieList/carousel'
import Details from './components/details/details';

function App() {
  return (
    <div>
     
     <Carousels/>
      <MoviesList/>
      <Details/>
     
      
    </div>

  );
}

export default App;
