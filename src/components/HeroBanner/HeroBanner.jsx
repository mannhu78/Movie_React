import "./HeroBanner.css"

function HeroBanner({ movies, bannerIndex }) {

    return (
        <div className="hero-container">

            <div
                className="hero-slider"
                style={{
                    transform: `translateX(-${bannerIndex * 100}%)`
                }}
            >

                {movies.map(movie => (

                    <div
                        key={movie.id}
                        className="hero-slide"
                        style={{
                            backgroundImage:
                                `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                        }}
                    >

                        <div className="hero-content">

                            <h1>{movie.title}</h1>

                            <p>
                                {movie.overview?.slice(0, 150)}...
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default HeroBanner