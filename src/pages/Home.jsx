import { useState } from "react"
import MovieCard from "../components/MovieCard"

const API_KEY = "6059f31d1aeea82e19c9a72a075c9cf2"

function Home() {

    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovies = async () => {

        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        )

        const data = await response.json()

        setMovies(data.results)
    }

    return (
        <div>

            <h1>Movie Search</h1>

            <input
                type="text"
                placeholder="Search movie..."
                onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={searchMovies}>
                Search
            </button>

            <div className="movie-list">

                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}

            </div>

        </div>
    )
}

export default Home