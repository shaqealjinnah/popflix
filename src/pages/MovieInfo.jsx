import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { ArrowLeftIcon, StarIcon } from "@heroicons/react/24/solid";
import { Link, useParams } from "react-router-dom";

function MovieInfo() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(null);

  async function getMovieInfo() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=b0099fba&i=${id}`
    );
    setInfo(data);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <>
      <div className="nav--wrapper">
        <Nav />
      </div>
      <section id="info">
        <div className="container">
          <div className="row">
            <Link to="/movies">
              <div className="back">
                <ArrowLeftIcon className="arrow-back" /> Back
              </div>
            </Link>
            {loading ? (
              <div className="movie__info--wrapper">
                <figure className="movie__img__info--wrapper">
                  <div className="movie__img__info--skeleton"></div>
                </figure>
                <div className="movie__description--info">
                  <div className="movie__header">
                    <div className="movie__title--info--skeleton"></div>
                    <div className="movie__rating--skeleton"></div>
                  </div>
                  <div className="movie__snippets">
                    <div className="snippet--skeleton"></div>
                    <div className="snippet--skeleton"></div>
                    <div className="snippet--skeleton"></div>
                  </div>
                  <div className="movie__plot--skeleton"></div>
                  <div className="genre--skeleton"></div>
                </div>
              </div>
            ) : (
              info && (
                <div className="movie__info--wrapper">
                  <figure className="movie__img__info--wrapper">
                    <img
                      src={info.Poster}
                      alt=""
                      className="movie__img--info"
                    />
                  </figure>
                  <div className="movie__description--info">
                    <div className="movie__header">
                      <h2 className="movie__title--info">{info.Title}</h2>
                      <div className="movie__rating">
                        <StarIcon className="star" />
                        <span className="white-bold">{info.imdbRating}</span>
                        <span className="total-rating">/10</span>
                      </div>
                    </div>
                    <div className="movie__snippets">
                      <div className="snippet">{info.Year}</div>
                      <div className="circle"></div>
                      <div className="snippet">{info.Rated}</div>
                      <div className="circle"></div>
                      <div className="snippet-last">{info.Runtime}</div>
                    </div>
                    <p className="movie__plot">{info.Plot}</p>
                    <div className="genre">{info.Genre}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieInfo;
