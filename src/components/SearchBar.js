import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  //step 1 : create a new piece of state
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };
  //step 2 : create an event handler to watch for the 'onChange' event
  const handleChange = (event) => {
    //step 3 : When the 'onChange' event fires, get the value from the input
    //step 4 : Take that value from the input and use it to update the piece of state
    setTerm(event.target.value);
  };

  //step 5 : pass the piece of state to the input as the value prop
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
