import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import "./MovieDetail.css"
import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"

const API_KEY = "6059f31d1aeea82e19c9a72a075c9cf2"

function MovieDetail({ query, setQuery, searchMovies }) {

    const { id } = useParams()

    const [movie, setMovie] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [cast, setCast] = useState([])
    const [similar, setSimilar] = useState([])
    const [showTrailer, setShowTrailer] = useState(false)

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setMovie(data))

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {

                const trailerVideo = data.results.find(
                    video => video.type === "Trailer" && video.site === "YouTube"
                )

                if (trailerVideo) setTrailer(trailerVideo.key)

            })
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setCast(data.cast.slice(0, 8)))

        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setSimilar(data.results.slice(0, 10)))

    }, [id])

    if (!movie) return <h2>Loading...</h2>

    return (
        <div className="detail-page">

            <Navbar
                query={query}
                setQuery={setQuery}
                searchMovies={searchMovies}
            />

            {/* Banner */}
            <div
                className="detail-banner"
                style={{
                    backgroundImage:
                        `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                }}
            />

            {/* Movie Info */}
            <div className="detail-container">

                <img
                    className="detail-poster"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />

                <div className="detail-info">

                    <h1>{movie.title}</h1>
                    <button
                        className="play-btn"
                        onClick={() => setShowTrailer(true)}
                    >
                        ▶ Play Trailer
                    </button>

                    <p className="rating">
                        ⭐ {movie.vote_average}
                    </p>

                    <p className="release">
                        Release: {movie.release_date}
                    </p>

                    <p className="overview">
                        {movie.overview}
                    </p>
                    <h2>Cast</h2>

                    <div className="cast-row">

                        {cast.map(actor => (

                            <div className="cast-card" key={actor.id}>

                                {actor.profile_path && (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                        alt={actor.name}
                                    />
                                )}

                                <p>{actor.name}</p>

                            </div>

                        ))}

                    </div>

                    <h2>Similar Movies</h2>

                    <div className="movie-row">

                        {similar.map(movie => (

                            <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id}>

                                <img
                                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                    alt={movie.title}
                                />

                                <p>{movie.title}</p>

                            </Link>

                        ))}

                    </div>
                </div>

            </div>

            {/* Trailer */}
            {showTrailer && trailer && (

                <div className="trailer-popup">

                    <div className="popup-content">

                        <button
                            className="close-btn"
                            onClick={() => setShowTrailer(false)}
                        >
                            X
                        </button>

                        <iframe
                            src={`https://www.youtube.com/embed/${trailer}`}
                            allowFullScreen
                        />

                    </div>

                </div>

            )}
            <Footer />
        </div>
    )
}

export default MovieDetail