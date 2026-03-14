import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const API_KEY = "6059f31d1aeea82e19c9a72a075c9cf2"

function MovieDetail() {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setMovie(data))

    }, [id])

    if (!movie) return <h2>Loading...</h2>

    return (
        <div>

            <h1>{movie.title}</h1>

            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />

            <p>{movie.overview}</p>

            <p>⭐ Rating: {movie.vote_average}</p>

            <p>Release: {movie.release_date}</p>

        </div>
    )
}

export default MovieDetail