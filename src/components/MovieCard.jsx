import { Link } from "react-router-dom"

function MovieCard({ movie }) {

    const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A"

    return (
        <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "white" }}
        >

            <div className="movie-card">

                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />

                <div className="movie-info">

                    <h3 className="movie-title">

                        {movie.title || movie.name}

                    </h3>

                    <div className="movie-meta">

                        <span className="movie-rating">
                            ⭐ {movie.vote_average?.toFixed(1)}
                        </span>

                        <span className="movie-year">
                            {year}
                        </span>

                    </div>

                </div>

            </div>

        </Link>
    )
}

export default MovieCard