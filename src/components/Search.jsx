import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Search({ text, setText, getMovies }) {
  return (
    <>
      <div className="content__wrapper">
        <h1 className="search__heading">Browse Our Movies</h1>
        <div className="input__wrapper">
          <input
            type="text"
            className="search__bar"
            placeholder="Search by Movie Title"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getMovies()
              }
            }}
          />
          <div className="search__icon--wrapper" onClick={() => getMovies()}>
            <MagnifyingGlassIcon className="search__icon" />
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
}

export default Search;
