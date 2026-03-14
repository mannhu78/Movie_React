import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import HeroBanner from "../components/HeroBanner"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const API_KEY = "6059f31d1aeea82e19c9a72a075c9cf2"

function Home() {

    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [trending, setTrending] = useState([])
    const [popular, setPopular] = useState([])
    const [topRated, setTopRated] = useState([])
    const [genres, setGenres] = useState([])

    const searchMovies = async () => {

        const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`
        )

        const data = await response.json()

        setMovies(
            data.results.filter(item => item.media_type === "movie")
        )
    }

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setTrending(data.results))

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setPopular(data.results))

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setTopRated(data.results))

        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setGenres(data.genres))

    }, [])

    return (
        <div>

            <Navbar
                query={query}
                setQuery={setQuery}
                searchMovies={searchMovies}
            />
        
            {trending.length > 0 && (
                <HeroBanner movie={trending[0]} />
            )}
            {movies.length > 0 && (
                <>
                    <h2>Search Results</h2>

                    <div className="movie-row">
                        {movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                </>
            )}
            <h2>Trending</h2>
            <div className="movie-row">
                {trending.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <h2>Popular</h2>
            <div className="movie-row">
                {popular.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <h2>Top Rated</h2>
            <div className="movie-row">
                {topRated.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Home