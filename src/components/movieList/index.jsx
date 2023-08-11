
import React, { useState, useEffect } from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import "./style.css";
import Navbar from "../navBar/Navbar";
import Carousels from "../carousel";


const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchedMovies, setSearchedMovies] = useState(movies);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        console.log(moviesData.results)
        setMovies(moviesData.results);
        setSearchedMovies(moviesData.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Failed to fetch movies");
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = (query) => {
    console.log(query)
    if(query.length>0){
      const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
      
    );
    // console.log(filteredMovies)
    setSearchedMovies(filteredMovies);

    }
    else{
      setSearchedMovies(movies)
    }

  };

  if (loading) {
    return <h1>Loading......</h1>;
  }

  return (
    <div>
      <Navbar onFilter={handleSearch}/>
      <Carousels/>
      <div className="image-container">
        {searchedMovies?.length > 0 ? (
          searchedMovies.map((item) => (
            <ImageContainer key={item.id} props={item} />
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default MoviesList;

