import React, { useState } from "react";

const Search = React.memo((props) => {
  const [enteredWord, setEnteredWord] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddWord({word: enteredWord})
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="word">Enter word: </label>
        <input
          type="text"
          id="word"
          value={enteredWord}
          onChange={(event) => setEnteredWord(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
});

export default Search;
