import React, { useState }  from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import {useNavigate} from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const history = useNavigate();
  
  const search = (e) => {
    e.preventDefault();
    console.log("search!");

    history.push("/search")
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      <div className="search__buttons">
        <Button variant="outlined" type="submit" onClick={search}>
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;