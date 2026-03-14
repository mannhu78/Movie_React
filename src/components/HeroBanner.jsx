function HeroBanner({ movie }) {

    return (

        <div
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                height: "500px",
                backgroundSize: "cover",
                padding: "50px"
            }}
        >

            <h1>{movie.title}</h1>
            <p style={{ maxWidth: "500px" }}>{movie.overview}</p>

        </div>

    )

}

export default HeroBanner