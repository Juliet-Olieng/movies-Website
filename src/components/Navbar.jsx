// import React,{useEffect,useState} from "react";
// import { getMovies } from "../../utils/utilities";
// const Navbar=()=>{
//     const [movies, setMovies] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [q, setQ] = useState("");
//     const [error, setError] = useState(null);
//     const [filterParam, setFilterParam] = useState("ALL"); // Initialize filterParam with "ALL"

//     useEffect(() => {
//         const searchMovies = async () => {
//           try {
//             const moviesData = await getMovies();
//             setMovies(moviesData.results);
//             setLoading(false);
//           } catch (error) {
//             console.error("Error occurred while fetching:", error.message);
//             setLoading(false);
//             setError("Failed to fetch movies");
//           }
//         };
//         searchMovies();
//       }, []);
    
//       // Filter movies based on the selected filterParam
//       const filteredMovies = filterParam === "ALL" ? movies : movies.filter(movie => movie.genre === filterParam);
    
//       // Search movies based on the user input (q)
//       const searchedMovies = q ? filteredMovies.filter(movie => movie.title.toLowerCase().includes(q.toLowerCase())) : filteredMovies;
//       return(
//         <div>
//         <div className="Nav">
//         <h4>M<span>oo</span>vie</h4> 
//          <label htmlFor="search">
//            <input
//              type="search"
//              name="search-form"
//              id="search-form"
//              className="search-input"
//              placeholder="Search for movies..."
//              value={q}
//              onChange={(e) => setQ(e.target.value)}
//            />
//          </label>
//          <ul>
//              <li><a href="">Home</a></li>
//          </ul>
//          <h4>My list</h4>
//          <button>Sign in</button>
 
//        </div>
//        <div className="image-container">
//         {/* Use the searchedMovies array instead of the original movies array */}
//         {searchedMovies?.length > 0 ? (
//           searchedMovies.map((item) => <ImageContainer key={item.id} props={item} />)
//         ) : (
//           <p>No movies found.</p>
//         )}
//       </div>
//        </div>
       

//       )

// }
// export default Navbar