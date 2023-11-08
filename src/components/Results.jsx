import { useNavigate } from "react-router-dom";

function Results({ movieInfo, loading, filterMovies }) {
  const navigate = useNavigate();

  return (
    <section id="results">
      <div className="container">
        <div className="row">
          <div className="search--wrapper">
            <div className="search__results">Search results: </div>
            <select
              id="filter"
              defaultValue={"DEFAULT"}
              onChange={(e) => filterMovies(e)}
            >
              <option value="DEFAULT" disabled>
                Sort
              </option>
              <option value="NEW_TO_OLD">Newest</option>
              <option value="OLD_TO_NEW">Oldest</option>
            </select>
          </div>
          <div className="movies">
            {loading
              ? new Array(8).fill(0).map((_, index) => (
                  <div className="movie" key={index}>
                    <figure className="movie__img--wrapper">
                      <div className="movie__img--skeleton"></div>
                    </figure>
                    <div className="movie__description">
                      <div className="movie__title">
                        <div className="movie__title--skeleton"></div>
                      </div>
                      <span className="movie--year primary--accent">
                        <div className="movie--year--skeleton"></div>
                      </span>
                    </div>
                  </div>
                ))
              : movieInfo &&
                movieInfo.map((movie) => (
                  <div
                    className="movie"
                    key={movie.imdbID}
                    onClick={() => navigate(`/movies/${movie.imdbID}`)}
                  >
                    <figure className="movie__img--wrapper">
                      <img
                        src={movie.Poster}
                        className="movie__img"
                        alt={movie.Title}
                      />
                    </figure>
                    <div className="movie__description">
                      <div className="movie__title">{movie.Title}</div>
                      <span className="movie--year primary--accent">
                        {movie.Year}
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
