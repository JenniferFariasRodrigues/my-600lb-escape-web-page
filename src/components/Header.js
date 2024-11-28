import React from "react";
import Navigation from "./Navigation";

const Header = ({ handleSubmit, history }) => {
  let searchInput;
  return (
    <header className="App-header">
      <h1>My 600-lb Escape</h1>
      <p>Baseado Em Uma História Real</p>
      <form
        onSubmit={(e) => handleSubmit(e, history, searchInput.value)}
        className="search-form"
      >
        <input
          type="text"
          placeholder="Search..."
          ref={(input) => (searchInput = input)}
          aria-label="Search Input"
        />
        <button type="submit" aria-label="Search">
          <svg
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="20px"
            height="20px"
          >
            <path d="M 13 2 C 7.486 2 3 6.486 3 12 C 3 17.514 7.486 22 13 22 C 15.266 22 17.357 21.221 19.061 19.94 L 24.293 25.293 C 24.683 25.683 25.316 25.683 25.707 25.293 C 26.098 24.902 26.098 24.269 25.707 23.879 L 20.061 18.061 C 21.221 16.357 22 14.266 22 12 C 22 6.486 17.514 2 13 2 z M 13 4 C 17.411 4 21 7.589 21 12 C 21 16.411 17.411 20 13 20 C 8.589 20 5 16.411 5 12 C 5 7.589 8.589 4 13 4 z" />
          </svg>
        </button>
      </form>
      <Navigation />
    </header>
  );
};

export default Header;
