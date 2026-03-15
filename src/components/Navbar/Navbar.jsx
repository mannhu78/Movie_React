import "./Searchbar.css"
import "./Navbar.css"
import { Link } from "react-router-dom"
function Navbar({ query, setQuery, searchMovies }) {

    return (
        <div className="navbar">

            <Link to="/" className="logo">
                MOVIE
            </Link>

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Search movie..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") searchMovies()
                    }}
                />

                <button onClick={searchMovies}>
                    Search
                </button>

            </div>

        </div>
    )
}

export default Navbar