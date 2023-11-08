import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Results from "../components/Results";
import axios from "axios";

function Movies({ text, setText }) {
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState(null);

  async function getMovies(filter) {
    if (text === "")
      return (document.querySelector("#filter").selectedIndex = 0);
    setLoading(true);
    displayResult();
    const movie = await axios.get(
      `https://www.omdbapi.com/?apikey=b0099fba&s=${text}`
    );
    const movieData = movie.data.Search;
    setMovieInfo(movieData);

    if (filter === "NEW_TO_OLD") {
      movieData.sort((a, b) => b.Year - a.Year);
    } else if (filter === "OLD_TO_NEW") {
      movieData.sort((a, b) => a.Year - b.Year);
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  function displayResult() {
    const searchResult = document.querySelector(".search__results");
    searchResult.innerHTML = `Search results for <span class="primary--accent">'${text}'</span>`;
  }

  function filterMovies(e) {
    getMovies(e.target.value);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <section id="landing">
        <Nav />
        <Search text={text} setText={setText} getMovies={getMovies} />
      </section>
      <Results
        movieInfo={movieInfo}
        loading={loading}
        filterMovies={filterMovies}
      />
    </>
  );
}

export default Movies;
