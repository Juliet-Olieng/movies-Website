import { useEffect, useState } from "react";
import React from "react";
import {useParams} from 'react-router-dom';
import { getMovies } from "../../utils/utilities";
import './detail.css';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const Details =()=>{
    const{moviesId}=useParams();
    const [movies,setMovies] =useState(null)
    useEffect(()=>{
        (async () =>{
            const movieDetails = await getMovies(moviesId);
            setMovies(movieDetails)
        })()
    },[moviesId])
    if(!movies){
        return <div>Loading...</div>
    }
    if(!movies.poster_path|| !movies.title || !movies.overview || !movies.release_date){
        return <div>Movie details missing</div>
    }
    return(
    <div className="details">
        <img src={`${IMAGE_BASE_URL}${movies.poster_path}`}alt={movies.title}/>
        <h2>{movies.title}</h2>
        <p>{movies.overview}</p>
        <p>Release Date:{movies.release_date}</p>
    </div>)
}
export default Details


