import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
      <nav>
        <div className="nav__container">
          <Link to='/' className="logo__wrapper">
            <span className="logo__text">
              POP<span className="text--accent">FLIX</span>
            </span>
          </Link>
          <ul className="nav__links">
            <li>
              <Link to='/' className="nav__link link__hover--effect">Home</Link>
            </li>
            <li>
              <Link to='/movies' className="nav__link link__hover--effect">Movies</Link>
            </li>
            <li>
              <a href="#" className="nav__link link__hover--effect cursor_not-allowed">
                Favourites
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Nav;
